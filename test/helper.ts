import supertest from 'supertest'
import { addMsg } from 'jest-html-reporters/helper'

const request = supertest.agent('https://reqres.in/api')
request.on('response', async (response) => {
  const { request, body, statusCode, headers } = response
  const data = {
    request: {
      header: request._header,
      url: request.url,
      body: request._data,
      method: request.method,
    },
    response: {
      header: headers,
      status: statusCode,
      body,
    },
  }
  await addMsg(JSON.stringify(data, null, 2))
})

export default request
