export const TABLE_HEAD_DATA = [
    "",
    "Department/Role Name",
    "Access Level",
    "No of members",
    "Last updated",
    "",
]

export const TABLE_ROW_DATA = [
    {
        role: "Teahcer",
        access: "All Access",
        members: 4,
        updated: "1 min ago",
        accessTableHead: [
            "",
            "Department/Role Name",
            "Access Level",
            "Summary",
            "Last updated",
            "",
        ],
        accessTableRow: [
            {
                role: "Enrolling Students",
                access: "All Access",
                summary: ["View | Create | Edit | Delete"],
                updated: "1 min ago",
            },
            {
                role: "Financials Details",
                access: "No Access",
                summary: ["-"],
                updated: "1 min ago",
            },
            {
                role: "Furniture Order",
                access: "Restricted Access",
                summary: ["View | Create"],
                updated: "1 min ago",
            },
            {
                role: "Technology Equipment",
                access: "Restricted Access",
                summary: ["View | Create"],
                updated: "1 min ago",
            },
            {
                role: "Organisation Modification",
                access: "All Access",
                summary: ["View | Create | Edit | Delete"],
                updated: "1 min ago",
            },
            {
                role: "Permissions & Access Control",
                access: "No Access",
                summary: ["-"],
                updated: "1 min ago",
            }
        ]
    },
    {
        role: "External Faculty",
        access: "Restricted access",
        members: 8,
        updated: "1 min ago",
    },
    {
        role: "Lab Assistants",
        access: "Restricted access",
        members: 16,
        updated: "1 min ago",
    },
    {
        role: "Non Teaching Staff",
        access: "Restricted access",
        members: 4,
        updated: "1 min ago",
    },
    {
        role: "Supervisors",
        access: "All Access",
        members: 1,
        updated: "1 min ago",
    },
]