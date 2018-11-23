'use strict'

import knex from 'knex'
import config from '../config/config'
let db

export default function getDb(...params) {
  if (!db) {
    db = knex(config)
  }

  return params.length ? db(...params) : db
}
