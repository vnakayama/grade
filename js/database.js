/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = 
    // [
    [ // Greography
        // First term
        { name: "Filos Educacao Mundo Ocidental", credits: 4, code: "EDF120", semester: 1 }, // 0
        { name: "Teoria da Geografia", credits: 4, code: "IGG112", semester: 1 }, // 1
        { name: "Planeta Terra", credits: 4, code: "IGG114", semester: 1 }, // 2
        { name: "Geog do Mundo Contemporaneo", credits: 4, code: "IGG115", semester: 1 }, // 3
        { name: "	Geografia da Populacao", credits: 4, code: "IGG122", semester: 1 }, // 4
        { name: "	Ativid Acad Cient Culturais", credits: 0, code: "IGGX08", semester: 1 }, // 5
        // Second term
        { name: "Fundamentos Sociológ Educação", credits: 4, code: "EDF240", semester: 2, category: 1 }, // 6
        { name: "Fundamentos de Biogeografia", credits: 4, code: "IGG123", semester: 2, category: 1 }, // 7
        { name: "Climatologia Geográfica", credits: 4, code: "IGG124", semester: 2, category: 1 }, // 8
        { name: "Cartografia Básica", credits: 4, code: "IGG125", semester: 2, category: 1 }, // 9
        { name: "Metodologia Cientifica", credits: 1, code: "IGG234", semester: 2, category: 1 }, // 10
        // Third term
        { name: "Educacao Brasileira", credits: 4, code: "EDA234", semester: 3, category: 1 }, // 11
        { name: "Geomorfologia Geral", credits: 4, code: "IGG235", semester: 3, category: 1 }, // 12
        { name: "Geografia Econômica", credits: 4, code: "IGG237", semester: 3, category: 1 }, // 13
        { name: "Trabalho de Campo Geog Física", credits: 1, code: "IGGX03", semester: 3, requirements: [7,8,12], category: 1 }, // 14
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 3, category: 1 }, // 15

        // Fourth term
        { name: "	Didática", credits: 4, code: "EDD241", semester: 4, category: 1 }, // 16
        { name: "	Geografia Política", credits: 4, code: "IGG252", semester: 4, category: 1 }, // 17
        { name: "Cartografia Temática", credits: 4, code: "IGG254", semester: 4, requirements: [9], category: 1 }, // 18
        { name: "	Trab Campo Cart Sens Remoto", credits: 1, code: "IGGX04", semester: 4, requirements: [18], category: 1 }, // 19
        { name: "Oficina Did de Geo Física", credits: 3, code: "IGGY05", semester: 4, requirements: [12], category: 1 }, // 20
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 4, category: 1 }, // 21

        // Fifth term
        { name: "Educ e Comunicação II (Libras)", credits: 3, code: "EDD636", semester: 5, category: 1 }, // 22
        { name: "Psicologia da Educação", credits: 4, code: "EDF245", semester: 5, category: 1 }, // 23
        { name: "Geografia Urbana", credits: 4, code: "IGG374", semester: 5, category: 1 }, // 24
        { name: "Geografia Agrária", credits: 4, code: "IGG376", semester: 5, category: 1 }, // 25
        { name: "Trabalho Campo Geog Humana", credits: 1, code: "IGGX07", semester: 5, requirements: [24, 25], category: 1 }, // 26
        { name: "Oficina Did Cart Sens Remoto", credits: 3, code: "IGGY04", semester: 5, requirements: [18], category: 1 }, // 27
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 5, category: 1 }, // 28
        // Sixth term
        { name: "Didatica da Geografia I", credits: 2, code: "EDD507", semester: 6, requirements: [16], category: 1 }, // 29
        { name: "	Prát Ens Geog Estágio Supervis	", credits: 8, code: "EDDU08", semester: 6, requirements: [16], category: 1, workload: 400 }, // 30
        { name: "Geografia Regional do Brasil", credits: 4, code: "IGG411", semester: 6, requirements: [25], category: 1 }, // 31
        { name: "Trabalho Campo Geog Regional", credits: 1, semester: 6, code: "IGGX06", requirements: [31], category: 1 }, // 32
        { name: "Oficina Did de Geo Humana", credits: 3, code: "IGGY03", semester: 6, requirements: [24,25], category: 1 }, // 33
        { name: "Atividades Acad. Optativas", credits: 4, semester: 6, category: 1 }, // 34
        // Seventh term
        { name: "Didatica da Geografia II", credits: 2, code: "EDD623", semester: 7, requirements: [29], category: 1 }, // 35
        { name: "Oficina Did de Geo Regional", credits: 3, code: "IGGY06", semester: 7, requirements: [3, 31], category: 1 }, // 36
        { name: "Atividades Acad. Optativas", credits: 4, semester: 7, category: 1 }, // 37
        // Eigth term
        { name: "Trabalho de Conclusão de Curso	", credits: 6, code: 'IGGK02', semester: 8, requirements: [10], category: 1, workload: 60 }, // 38
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 8, category: 1 }, // 36
        { name: "Atividades Acad. Optativas", credits: 4, semester: 8, category: 1 }, // 37
        { name: "Atividades Acad. Optativas", credits: 4, semester: 8, category: 1 }, // 38
        // TOTAL
        { name: "Ativ. Complementares",  semester: 8, category: 5, workload: 400 }, // 39
        { name: "Ativ. Extensão",  semester: 8, category: 5, workload: 320 }, // 40
    ]
]
