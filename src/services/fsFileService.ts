import fs from 'fs'
import { type FileService } from '../interfaces/utils/fileService'
import { injectable } from 'inversify'

@injectable()
class FsFileService implements FileService {
  public readJson<T>(path: string): T {
    const data = fs.readFileSync(path, 'utf-8')
    return JSON.parse(data) as T
  }
}

export default FsFileService
