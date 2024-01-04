export const sidebarData = [
    {
        itemName: "Inicio",
        svgName: "home",
        href:"/"
    },
    {
        itemName: "Espacio de trabajo",
        svgName: "workspaces",
        href:"/",
        info:"3"
    },
    {
        itemName: "Usuarios",
        svgName: "users",
        children: [
            {
                childrenName: "Estudiantes",
                href: "/students",
            },
            {
                childrenName: "Asesores",
                href: "/advisers",
            },
            {
                childrenName: "Colaboradores",
                href: "/collaborators",
            },
        ],
    },
    {
        itemName: "Servicios",
        svgName: "services",
        href:"/"
    },
    {
        itemName: "Contactos",
        svgName: "contacts",
        href:"/"
    },
    {
        itemName: "Listas",
        svgName: "list",
        href:"/"
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