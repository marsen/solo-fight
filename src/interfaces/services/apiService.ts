export default interface ApiService {
  fetchData: (url: string) => Promise<string>
  fetchImage: (url: string) => Promise<{ buffer: Buffer, headers: ResponseHeaders }>
}

export type ResponseHeaders = Record<string, string | string[] | null>
