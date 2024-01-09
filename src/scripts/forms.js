export const students = [
    {
        subtitle    : "Estudiante",
        fields      : [
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "student_code",
                label       : "Código de estudiante",
                placeholder : "E00001",
                required    : true,
                value       : "E00002",
                disabled    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "dni",
                label       : "DNI",
                placeholder : "76543210",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6",
                name        : "name",
                label       : "Nombre Completo",
                placeholder : "Jorge Pérez",
                required    : true
            },
            {
                typeInput   : "select",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "country",
                label       : "País",
                placeholder : "Seleccione un país",
                required    : true,
                value       : [
                    {
                        valueElem   : "PE",
                        labelElem   : "Perú"
                    },
                    {
                        valueElem   : "CH",
                        labelElem   : "Chile"
                    },
                    {
                        valueElem   : "Ar",
                        labelElem   : "Argentina"
                    },
                ]
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "department",
                label       : "Departamento",
                placeholder : "Lima",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "province",
                label       : "Provincia",
                placeholder : "Lima",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "district",
                label       : "Distrito",
                placeholder : "Lima",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6",
                name        : "address",
                label       : "Dirección",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "email",
                label       : "Correo electrónico",
                placeholder : "email@example.com",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "birthdate",
                label       : "Fecha de nacimiento",
                placeholder : "01/01/2000",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "age",
                label       : "Edad",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "telephone",
                label       : "Teléfono",
                placeholder : "987654321",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "study_center",
                label       : "Centro de estudios",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "career",
                label       : "Carrera",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "origin",
                label       : "Origen",
                placeholder : "Lugar de procedencia",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-9",
                name        : "comment",
                label       : "Comentario",
                placeholder : "Escribe un comentario...",
                required    : true
            },
        ]
    },
    {
        subtitle    : "Datos de Control",
        fields      : [
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "user_created",
                label       : "Creado por",
                placeholder : "juan.perez",
                value       : "juan.perez",
                disabled    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "date_created",
                label       : "Fecha creación",
                placeholder : "01/01/2023 16:24:03",
                value       : "01/01/2023 16:24:03",
                disabled    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "user_updated",
                label       : "Modificado por",
                placeholder : "juan.perez",
                value       : "juan.perez",
                disabled    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "date_updated",
                label       : "Fecha actualización",
                placeholder : "01/01/2023 16:24:03",
                value       : "01/01/2023 16:24:03",
                disabled    : true
            },
        ]
    }
];