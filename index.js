const _= require ('lodash')

const user = {
    id:1,
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@test.com',
    passw: '234342'
}

const prepUs = _.omit(user, ['passw'])
console.log('prepUs:', prepUs);