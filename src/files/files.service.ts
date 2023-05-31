import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid'

@Injectable()
export class FilesService {
    async createFile(file){
        try{
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve(__dirname, '..', 'static')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            console.log(file)
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return fileName;
        } catch(e){
            console.log("error")
        }
    }
}
