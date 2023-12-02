export interface FileService {
  readJson: <T>(path: string) => T
}
