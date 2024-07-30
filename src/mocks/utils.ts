/* eslint-disable @typescript-eslint/no-explicit-any */
export const getResponse = <T>(data: T) => {
  return (req: any, res: any, ctx: any) => {
    return res(ctx.json(data))
  }
}
