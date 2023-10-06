export interface Logger{
  log(level:string,message:string,...meta:object[])
}