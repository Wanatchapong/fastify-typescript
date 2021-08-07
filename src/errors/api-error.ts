export class ApiError extends Error {
  code: string

  constructor(code: string, msg: string) {
    super(msg)
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ApiError.prototype)

    this.code = code
  }
}
