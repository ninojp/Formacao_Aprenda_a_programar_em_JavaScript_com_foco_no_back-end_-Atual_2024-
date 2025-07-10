'use strict';

const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibeInfos: function() {
        console.log(`${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`);
    }
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  nascimento: "2024-01-01",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log('Curso criado');
  },
};
Object.setPrototypeOf(admin, user); // Define user como protótipo de admin
admin.exibeInfos(); // Chama o método do protótipo user
admin.criarCurso(); // Chama o método específico de admin
