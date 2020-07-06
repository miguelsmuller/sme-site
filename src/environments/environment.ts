// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEmail: {
    url: 'https://api.mailgun.net/v3/devim.com.br',
    key: 'api:key-84f5f5e31a9a249181bd9fd3a16f4248',
    emailFrom: 'SME-Site postmaster@sme.rioclaro.com.br'
  },
  apiNews: {
    url: 'https://www.rioclaro.rj.gov.br/wp-json/wp/v2',
    count: '4',
    tag: '75'
  },
  departmentName: 'Secretaria Municipal de Educação',
  departmentOwer: 'Ana Paula Silva',
  departmentAddres: 'Rdv. Saturnino Braga, RJ 155 - Km44<br/>Guarita – Rio Claro<br/>CEP: 27.460-000',
  departmentOpeningHours: 'De segunda-feira a sexta-feira<br/> 8:00h às 12:00h e 13:00h às 17:00h',
  departmentPhone: '(24) 3332-1717 / (24) 3332-1292 <br/> Ramal: 460',
  departmentMail: 'educa@rioclaro.rj.gov.br',
  departmentSectors: [
    {
      name: 'Gabinete ',
      options: [
        {email: 'educa@rioclaro.rj.gov.br', title: 'Gabinete da Secretaria de Educação'},
      ]
    }, {
      name: 'Departamentos',
      options: [
        {email: 'Departamento Administrativo', title: 'Departamento Administrativo'},
        {email: 'Departamento Pedagógico', title: 'Departamento Pedagógico'},
        {email: 'Departamento Compras', title: 'Departamento Compras'},
      ]
    }, {
      name: 'Divisões Educacionais',
      options: [
        {email: 'Divisão de Educação Infantil', title: 'Divisão de Educação Infantil'},
        {email: 'Divisão de Ensino Fundamental e EJA', title: 'Divisão de Ensino Fundamental e EJA'},
        {email: 'Divisão de Educação Especial', title: 'Divisão de Educação Especial'},
      ]
    }, {
      name: 'Divisões Administrativas',
      options: [
        {email: 'Divisão de Almoxarifado', title: 'Divisão de Almoxarifado'},
        {email: 'Divisão de Tecnologia da Informação', title: 'Divisão de Tecnologia da Informação'},
        {email: 'Divisão de Transporte Escolar', title: 'Divisão de Transporte Escolar'},
        {email: 'Divisão de Manutenção e Conservação', title: 'Divisão de Manutenção e Conservação'},
      ]
    }, {
      name: 'Outros',
      options: [
        {email: 'Não sei a opção correta', title: 'Não sei a opção correta'},
      ]
    }
  ],
  cityLocations: [
    {
      name: 'Distritos',
      options: [
        'Rio Claro',
        'Lídice',
        'Passa Três',
        'Getulândia',
        'São João Marcos'
      ]
    }, {
      name: 'Outros',
      options: [
        'Eu moro em outro Município',
        'Eu moro em outro Estado',
        'Eu moro fora do Brasil'
      ]
    }
  ],
  manifestationType: [
    'Denúncia',
    'Reclamação',
    'Solicitação',
    'Sugestão',
    'Elogio'
  ],
  units: [{
    unitName: 'Creche Ernane do Amaral Peixoto',
    unitLocality: 'Rio Claro',
    unitType: 'Urbano',
    unitAddress: 'Avenida João Batista Portugal, n.º 230, Centro - Rio Claro/RJ - CEP: 27460-000',
    unitEmail: 'crechemeap@gmail.com',
    unitPhone: 'Ramal: 230'
  }, {
    unitName: 'Creche Menino Menino Jesus de Praga',
    unitLocality: 'Lídice',
    unitType: 'Urbano',
    unitAddress: 'Rodovia Francisco Saturnino Braga, 715 - Lídice - Rio Claro/RJ - CEP: 27475-000',
    unitEmail: 'crechemjpraga.educa16@gmail',
    unitPhone: 'Ramal: 450'
  }, {
    unitName: 'Creche Geraldo Magela Gonçalves',
    unitLocality: 'Passa Três',
    unitType: 'Rural',
    unitAddress: 'Estrada São João Marcos, nº 2970 - Passa Três - Rio Claro/RJ - CEP: 27470-000',
    unitEmail: 'crechegeraldomagela@hotmail.com',
    unitPhone: 'Ramal: 464'
  }, {
    unitName: 'Escola Municipal Sertão dos Hortelãs',
    unitLocality: 'Sertão Hortelãs',
    unitType: 'Rural',
    unitAddress: 'Sertão dos Hortelãs - Rio Claro/RJ - CEP: 27460-000',
    unitEmail: 'bittencourtivanilda@gmail.com',
    unitPhone: 'S/T'
  }, {
    unitName: 'Escola Municipalizada de Pouso Seco',
    unitLocality: 'Pouso Seco',
    unitType: 'Rural',
    unitAddress: 'Rod. Washington Luiz – Getulândia - Rio Claro/RJ - CEP: 27465-000',
    unitEmail: 'mariacandidoc@gmail.com',
    unitPhone: 'Ramal: 423'
  }, {
    unitName: 'Escola Municipalizada Getulândia',
    unitLocality: 'Getulândia',
    unitType: 'Rural',
    unitAddress: 'Estrada Washington Luiz , n.º 3000 - Getulândia - Rio Claro/RJ –  CEP: 27465-000',
    unitEmail: 'emgetulandia@yahoo.com.br',
    unitPhone: 'Ramal: 429'
  }, {
    unitName: 'Pré Municipal Professora Laudelina da Silva Neto',
    unitLocality: 'Getulândia',
    unitType: 'Urbana',
    unitAddress: 'Rua Nossa Senhora de Fátima - Getulândia - Rio Claro/RJ –  CEP: 27465-000',
    unitEmail: 'emgetulandia@yahoo.com.br',
    unitPhone: 'Ramal: 429'
  }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
