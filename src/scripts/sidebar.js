export const sidebarData = [
    {
        itemName: "Inicio",
        svgName: "home",
        href:"/"
    },
    {
        itemName: "Espacio de trabajo",
        svgName: "workspaces",
        href:"/workspaces",
        info:"3"
    },
    {
        itemName: "Usuarios",
        svgName: "users",
        children: [
            {
                childrenName: "Estudiantes",
                href: "/listStudents",
            },
            {
                childrenName: "Asesores",
                href: "/listAdvisers",
            },
            {
                childrenName: "Colaboradores",
                href: "/listCollaborators",
            },
        ],
    },
    {
        itemName: "Servicios",
        svgName: "services",
        href:"/listServices"
    },
    {
        itemName: "Contactos",
        svgName: "contacts",
        href:"/test"
    },
    {
        itemName: "Listas",
        svgName: "list",
        href:"/test"
    },
    {
        itemName: "Configuración",
        svgName: "configuration",
        href:"/configuration"
    },
];

/*
    Menú:
    Inicio - Home (I)
    Espacio de trabajo - Workspaces (I)
    Usuarios (I)
        Colaboradores
        Estudiantes
        Asesores
    Servicios (I)
    Contactos (I)
    Listas (I)
    Configuración (I)
 */