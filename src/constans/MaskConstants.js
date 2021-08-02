export const personType = {
  legal: 'legal',
  physical: 'physical'
}

export const CEP_MASK = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
]

export const CPF_MASK = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
]

export const CNPJ_MASK = [
    /[0-9]/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/
  ]
