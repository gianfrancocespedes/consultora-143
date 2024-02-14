export const services = [
    {
        subtitle    : "Servicio",
        fields      : [
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "service_code",
                label       : "Código de servicio",
                placeholder : "S00001",
                required    : true,
                value       : "S00002",
                disabled    : true
            },
            {
                typeInput   : "select",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "type",
                label       : "Tipo de servicio",
                placeholder : "Seleccione un tipo",
                required    : true,
                value       : [
                    {
                        valueElem   : 1,
                        labelElem   : "Asesoría"
                    },
                    {
                        valueElem   : 2,
                        labelElem   : "Elaboración"
                    },
                ]
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "service_specification",
                label       : "Especificación",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "adviser_code",
                label       : "Código de asesor",
                placeholder : "A00001",
                required    : true,
                value       : "A00002",
                disabled    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6",
                name        : "description",
                label       : "Descripción",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "startDate",
                label       : "Fecha de inicio",
                placeholder : "01/01/2000",
                required    : true,
                value       : ""
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "endDate",
                label       : "Fecha de fin",
                placeholder : "01/01/2999",
                required    : true,
                value       : ""
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "total_cost",
                label       : "Pago del alumno",
                placeholder : "0",
                required    : true,
                value       : "0"
            },
            
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "total_payment",
                label       : "Pago del asesor",
                placeholder : "A00001",
                required    : true,
                value       : "0"
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "payment_status",
                label       : "Estado del pago",
                placeholder : "",
                required    : true,
                value       : "Pendiente de pago"
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "service_status",
                label       : "Estado del servicio",
                placeholder : "",
                required    : true,
                value       : "Terminado"
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
    },
    {
        subtitle    : "Estudiantes",
        students    : [
            {
                code        : "E00001",
                name        : "Carlos Andrés Pérez Gómez",
                dni         : "72363647",
                telephone   : "987654321",
                urlWp       : "https://wa.me/987654321",
            },
            {
                code        : "E00002",
                name        : "María José López Rodríguez",
                dni         : "71625341",
                telephone   : "912345678",
                urlWp       : "https://wa.me/912345678",
            },
        ]
    }
];

export const studentsOfService = [
    {
        subtitle    : "Estudiante(s)",
        fields      : [
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "code",
                label       : "Código de estudiante",
                placeholder : "E00001",
                required    : true,
                value       : "E00002",
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "dni",
                label       : "DNI",
                placeholder : "7654321",
                required    : true,
                disabled    : true,
                value       : "76543210",
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6",
                name        : "name",
                label       : "Nombre",
                placeholder : "Gianfranco Moisés Céspedes Francia",
                required    : true,
                disabled    : true,
                value       : "Gianfranco Moisés Céspedes Francia",
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "code",
                label       : "Código de estudiante",
                placeholder : "E00001",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "dni",
                label       : "DNI",
                placeholder : "7654321",
                required    : true,
                disabled    : true,
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6",
                name        : "name",
                label       : "Nombre",
                placeholder : "Gianfranco Moisés Céspedes Francia",
                required    : true,
                disabled    : true,
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "code",
                label       : "Código de estudiante",
                placeholder : "E00001",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "dni",
                label       : "DNI",
                placeholder : "7654321",
                required    : true,
                disabled    : true,
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6",
                name        : "name",
                label       : "Nombre",
                placeholder : "Gianfranco Moisés Céspedes Francia",
                required    : true,
                disabled    : true,
            }
        ]
    },
    {
        subtitle    : "Información de asesoría",
        fields      : [
            {
                typeInput   : "select",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "type",
                label       : "Tipo de servicio",
                placeholder : "Seleccione un tipo",
                required    : true,
                value       : [
                    {
                        valueElem   : 1,
                        labelElem   : "Asesoría"
                    },
                    {
                        valueElem   : 2,
                        labelElem   : "Elaboración"
                    }
                ]
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "service_specification",
                label       : "Especificación",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6",
                name        : "description",
                label       : "Descripción",
                placeholder : "",
                required    : true
            },
        ]
    }
];

export const students = [
    {
        subtitle    : "Estudiante",
        urlWp       : "https:wa.me/51987654321",
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
    },
    {
        subtitle    : "Servicios",
        services    : [
            {
                code        : "S00001",
                studentCode : "E00001",
                adviserCode : "A00001",
                serviceType : "Asesoría",
                serviceStat : "Pendiente de asignar", //Pendiente de asignar - Pendiente - Terminado
                servicePay  : "Pendiente",
                urlWp       : "https://wa.me/987654321",
            },
            {
                code        : "S00002",
                studentCode : "E00001, E00003",
                adviserCode : "A00002",
                serviceType : "Asesoría",
                serviceStat : "Pendiente de asignar", //Pendiente de asignar - Pendiente - Terminado
                servicePay  : "Pendiente",
                urlWp       : "https://wa.me/987654321",
            },
        ]
    }
];

export const advisers = [
    {
        subtitle    : "Asesor",
        urlWp       : "https:wa.me/51987654321",
        fields      : [
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "adviser_code",
                label       : "Código de asesor",
                placeholder : "A00001",
                required    : true,
                value       : "A00002",
                disabled    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "dni",
                label       : "DNI",
                placeholder : "76543210",
                required    : true,
                value       : "76543210",
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6",
                name        : "name",
                label       : "Nombre Completo",
                placeholder : "Jorge Pérez",
                required    : true,
                value       : "Jorge Pérez",
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
                name        : "telephone",
                label       : "Teléfono",
                placeholder : "987654321",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "country",
                label       : "País",
                placeholder : "Perú",
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
                name        : "service",
                label       : "Servicio",
                placeholder : "Asesoría",	//Asesoría - Elaboración
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3",
                name        : "key_word",
                label       : "Key word",
                placeholder : "",
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
                name        : "especialization",
                label       : "Especialización",
                placeholder : "",
                required    : true
            },
            {
                typeInput   : "text",
                className   : "col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9",
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
    },
    {
        subtitle    : "Servicios",
        services    : [
            {
                code        : "S00001",
                studentCode : "E00001",
                serviceType : "Asesoría",
                serviceStat : "Pendiente", //Pendiente de asignar - Pendiente - Terminado
                servicePay  : "Pendiente",
            },
            {
                code        : "S00002",
                studentCode : "E00002, E00003",
                serviceType : "Asesoría",
                serviceStat : "Pendiente", //Pendiente de asignar - Pendiente - Terminado
                servicePay  : "Pendiente",
            },
        ]
    }
];

export const collaborators = [
    {
        subtitle    : "Estudiante",
        urlWp       : "https:wa.me/51987654321",
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
    },
    {
        subtitle    : "Servicios",
        services    : [
            {
                code        : "S00001",
                studentCode : "E00001",
                adviserCode : "A00001",
                serviceType : "Asesoría",
                serviceStat : "Pendiente de asignar", //Pendiente de asignar - Pendiente - Terminado
                servicePay  : "Pendiente",
                urlWp       : "https://wa.me/987654321",
            },
            {
                code        : "S00002",
                studentCode : "E00001, E00003",
                adviserCode : "A00002",
                serviceType : "Asesoría",
                serviceStat : "Pendiente de asignar", //Pendiente de asignar - Pendiente - Terminado
                servicePay  : "Pendiente",
                urlWp       : "https://wa.me/987654321",
            },
        ]
    }
];