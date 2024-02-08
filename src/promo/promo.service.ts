/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { PromoEntity } from './entities/promo.entity';

@Injectable()
export class PromoService {

  constructor(
    @InjectRepository(PromoEntity)
    private repository: Repository<PromoEntity>,
  ) {}

  async create(
    createPromoDto: CreatePromoDto,
    image: Express.Multer.File,
  ): Promise<PromoEntity> {
    return this.repository.save({
      image: image.filename,
      title: createPromoDto.title,
      description: createPromoDto.description,
    });
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, updatePromoDto: UpdatePromoDto, image: Express.Multer.File) {
    const toUpdate = await this.repository.findOneBy({ id });   // Ищем запись по ID в базе
    if (!toUpdate) {                                            // Если не находим, то возвращаем ошибку 400
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }
    if (updatePromoDto.description) {                           // Тут расписаны изменения позиций на все случаи
      toUpdate.description = updatePromoDto.description;        // Если админ захочет поменять описание
    }
    if (updatePromoDto.title) {                                 // Название
      toUpdate.title = updatePromoDto.title;
    }
    if (image) {                                                // Или картинку
      if (toUpdate.image !== image.filename) {
        fs.unlink(`db_images/promo/${toUpdate.image}`, (err) => {   
          // Если картинка с таким именем уже есть на сервере, то кидаем ошибку
          // Всегда проще переименовать файл нежели случайно что-то перезаписать
          if (err) {
            console.error(err);
          }
        });
      }
      toUpdate.image = image.filename;
    }
    return this.repository.save(toUpdate);    // Сохраняем изменения в репозитории
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
