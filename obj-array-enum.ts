
enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'Ben',
  age: 36,
  hobbies: ['coding', 'crochet'],
  role:Role.ADMIN
}

console.log(person)
if (person.role === Role.ADMIN) {
  console.log('is author')
}