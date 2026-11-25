const state = {};

var data = [

    {
        "id": "1",
        "Rua": "SILVIO BRAND CORREIA - LADO ÍMPAR A PARTIR DE 725 - LADO PAR A PARTIR DE 860",
        "Equipe": "AZUL",
        "Micro": "1, 2, 3 e 4 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-050",
    },

    {
        "id": "2",
        "Rua": "ALAMEDA DAS SIBIPIRUNAS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-056",
    },

    {
        "id": "3",
        "Rua": "ALAMEDA DAS ESPATODEAS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-054",
    },

    {
        "id": "4",
        "Rua": "ALAMEDA DAS QUARESMEIRAS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-060",
    },

    {
        "id": "5",
        "Rua": "ALAMEDA DOS CEDROS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-062",
    },

    {
        "id": "6",
        "Rua": "ALAMEDA DOS IPES",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-058",
    },

    {
        "id": "7",
        "Rua": "ALAMEDA VISTA ALEGRE",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-064",
    },

    {
        "id": "8",
        "Rua": "ISAIAS PALUDETO",
        "Equipe": "AZUL",
        "Micro": "1 - SÃO CARLOS",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-202",
    },

    {
        "id": "9",
        "Rua": "GERALDO CLEMENTE DA COSTA",
        "Equipe": "AZUL",
        "Micro": "1 - SÃO CARLOS",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-200",
    },

    {
        "id": "10",
        "Rua": "MARIA BENEDITA DOS SANTOS",
        "Equipe": "AZUL",
        "Micro": "1 - SÃO CARLOS",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "",
    },

    {
        "id": "11",
        "Rua": "ADILSON ANTONIO ANTUNES DE CAMPOS",
        "Equipe": "AZUL",
        "Micro": "1 - RECANTO MONÇÕES",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-088",
    },

    {
        "id": "12",
        "Rua": "ANTONIO FRANCISCO NOGUEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RECANTO MONÇÕES",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-080",
    },

    {
        "id": "13",
        "Rua": "FRANCISCO FERRAZ DE OLIVEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RECANTO MONÇÕES",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-082",
    },

    {
        "id": "14",
        "Rua": "JOSE FERNANDO MIETO",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-076",
    },

    {
        "id": "15",
        "Rua": "ITALIA MENEGON PELEGRINE",
        "Equipe": "AZUL",
        "Micro": "RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-072",
    },

    {
        "id": "16",
        "Rua": "PROFESSOR JOAO CAMPOS VIEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-074",
    },

    {
        "id": "17",
        "Rua": "REINALDO ALVES DE OLIVEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-071",
    },

    {
        "id": "18",
        "Rua": "ARMANDO PELEGRINE",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-070",
    },

    {
        "id": "19",
        "Rua": "EDSON BICUDO DE ALMEIDA",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-170",
    },

    {
        "id": "20",
        "Rua": "JOAO BATISTA RODRIGUES",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-172",
    },

    {
        "id": "21",
        "Rua": "NORMA CINCILIO",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-174",
    },

    {
        "id": "22",
        "Rua": "ANA PAULA SALA FERRAZ",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-176",
    },

    {
        "id": "23",
        "Rua": "JURANDIR FERRAZ",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-178",
    },

    {
        "id": "24",
        "Rua": "VALDOMIRO DAL BO",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-182",
    },

    {
        "id": "25",
        "Rua": "LEOBINO LOPES DE BARROS",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-184",
    },

    {
        "id": "26",
        "Rua": "JOSE ANTONIO GIACOMELI",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-186",
    },

    {
        "id": "27",
        "Rua": "SAMUEL MARQUES",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-180",
    },

    {
        "id": "28",
        "Rua": "DOMINGOS RODRIGUES MARTINS",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-188",
    },

    {
        "id": "29",
        "Rua": "ALDERICO PRESTES DOS SANTOS",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-190",
    },

    {
        "id": "30",
        "Rua": "ARISTIDES MIGUEL MACEDO",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-192",
    },

    {
        "id": "31",
        "Rua": "RUA 13",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-194",
    },

    {
        "id": "32",
        "Rua": "ESTRADA MUNICIPAL XIRIRICA",
        "Equipe": "AZUL",
        "Micro": "1 - JARDIM PORTO CITY",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18549-899",
    },

    {
        "id": "33",
        "Rua": "IDALINA DE SOUZA MARTINS",
        "Equipe": "AZUL",
        "Micro": "1 - JARDIM PORTO CITY",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": "18543-204",
    },

    {
        "id": "34",
        "Rua": "ESTRADA MUNICIPAL LUIS ALCALA",
        "Equipe": "AZUL",
        "Micro": "1 - JARDIM PORTO CITY",
        "Posto": "VANTE",
        "ACS": "TIAGO",
	"CEP": " ",
    },

    {
        "id": "35",
        "Rua": "DOMINGOS TOME",
        "Equipe": "AZUL",
        "Micro": "2 e 3",
        "Posto": "VANTE",
        "ACS": "KAUAN",
	"CEP": "18543-502",
    },

    {
        "id": "36",
        "Rua": "JOAO BAPTISTA MANTOVANI",
        "Equipe": "AZUL",
        "Micro": "2",
        "Posto": "VANTE",
        "ACS": "KAUAN",
	"CEP": "18543-510",
    },

   /* {
        "id": "37",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "AZUL",
        "Micro": "2",
        "Posto": "VANTE",
        "ACS": "KAUAN",
    }, */

   /* {
        "id": "38",
        "Rua": "DOMINGOS TOME",
        "Equipe": "AZUL",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": "",
    }, */

  /*  {
        "id": "39",
        "Rua": "SILVIO BRAND CORREA",
        "Equipe": "AZUL",
        "Micro": "3",
        "Posto": "VANTE",
    }, */

    {
        "id": "40",
        "Rua": "AMADEU DE LARA",
        "Equipe": "AZUL",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": "18543-504",
    },

    {
        "id": "41",
        "Rua": "JOSE TEODORO DE ALMEIDA",
        "Equipe": "AZUL",
        "Micro": "4",
        "Posto": "VANTE",
	"CEP": "18543-514",
    },

/*    {
        "id": "42",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "AZUL",
        "Micro": "4",
        "Posto": "VANTE",
    }, */

    {
        "id": "43",
        "Rua": "JOSEPHINA SIMEIRA",
        "Equipe": "AZUL",
        "Micro": "4",
        "Posto": "VANTE",
	"CEP": "18543-508",
    },

    {
        "id": "44",
        "Rua": "ARISTIDES CANDIDO DA SILVA - A PARTIR DE 500",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
	"CEP": "18543-538",
    },

    {
        "id": "45",
        "Rua": "RUA A",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
	"CEP": "18543-542",
    },

    {
        "id": "46",
        "Rua": "RUA B",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
	"CEP": "18543-544",
    },

    {
        "id": "47",
        "Rua": "AVENIDA 1",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
	"CEP": "18543-540",
    },

    {
        "id": "48",
        "Rua": "VALDIR JOSE FERRARI",
        "Equipe": "VERDE",
        "Micro": "1",
        "Posto": "VANTE",
	"CEP": "18543-516",
    },

    {
        "id": "49",
        "Rua": "ISOLINA MARTINS TELES",
        "Equipe": "VERDE",
        "Micro": "1",
        "Posto": "VANTE",
	"CEP": "18543-528",
    },

    {
        "id": "50",
        "Rua": "ARISTIDES CANDIDO DA SILVA - ATÉ 500",
        "Equipe": "VERDE",
        "Micro": "1 e 2",
        "Posto": "VANTE",
	"CEP": "18543-538",
    },

    {
        "id": "51",
        "Rua": "PEDRO PAULO BAZZO",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
	"CEP": "18543-530",
    },

    {
        "id": "52",
        "Rua": "ERNESTO DALSOGLIO",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
	"CEP": "18543-522",
    },

 /*   {
        "id": "53",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
    }, */

    {
        "id": "54",
        "Rua": "DOMINGOS TOME",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
	"CEP": "18543-502",
    },

    {
        "id": "55",
        "Rua": "MARCOS STEINER SOBRINHO",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": "18543-532",
    },

    {
        "id": "56",
        "Rua": "JOSE TEODORO DE ALMEIDA",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": "18543-514",
    },

    {
        "id": "57",
        "Rua": "JOSE MARINONIO SOBRINHO",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": "18543-016",
    },

    {
        "id": "58",
        "Rua": "SILVIO BRAND CORREIA - LADO IMPAR ATÉ 725 - LADO PAR ATÉ 860",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": " ",
    },

    {
        "id": "59",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
	"CEP": "18543-538",
    },

    {
        "id": "60",
        "Rua": "FELIX ROCCO",
        "Equipe": "VERDE",
        "Micro": "4",
        "Posto": "VANTE",
	"CEP": "18543-524",
    },

    {
        "id": "61",
        "Rua": "ITALIA PREVITALI",
        "Equipe": "VERDE",
        "Micro": "4",
        "Posto": "VANTE",
	"CEP": "18543-536",
    },

    {
        "id": "62",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "4",
        "Posto": "VANTE",
	"CEP": "18543-538",
    },

    {
        "id": "63",
        "Rua": "LEONIDAS SAMPAIO",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-534",
    },

    {
        "id": "64",
        "Rua": "TEREZIANO PEREIRA DE CAMARGO",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-012",
    },

    {
        "id": "65",
        "Rua": "BENEDITA CAMPOS BONINE",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-008",
    },

    {
        "id": "66",
        "Rua": "JOÃO BATISTA ALBIEIRO",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-006",
    },

    {
        "id": "67",
        "Rua": "LUIS GERALDO MARTELI",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-002",
    },

    {
        "id": "68",
        "Rua": "VIRGILINO ROSA PIMENTA",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-004",
    },

 /*   {
        "id": "69",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    }, */

    {
        "id": "70",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-538",
    },

    {
        "id": "71",
        "Rua": "IZA FILIETAZ LEITE",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
	"CEP": "18543-014",
    },

    {
        "id": "72",
        "Rua": "RUA 1",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-002",
    },

    {
        "id": "73",
        "Rua": "RUA 2",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-004",
    },

    {
        "id": "74",
        "Rua": "RUA 3",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-006",
    },

    {
        "id": "75",
        "Rua": "CAIC ROÇA",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": " ",
    },

    {
        "id": "76",
        "Rua": "RODOVIA ANTONIO PIRES DE ALMEIDA",
        "Equipe": "VERMELHA",
        "Micro": "01 - ITAQUI",
        "Posto": "CAIC",
	"CEP": " ",
    },

    {
        "id": "77",
        "Rua": "FAZENDA SAO DOMINGOS",
        "Equipe": "VERMELHA",
        "Micro": "01 - ITAQUI",
        "Posto": "CAIC",
	"CEP": " ",
    },

    {
        "id": "78",
        "Rua": "RUA 4",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-008",
    },

    {
        "id": "79",
        "Rua": "RUA 5",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-010",
    },

    {
        "id": "80",
        "Rua": "RUA 6",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-012",
    },

    {
        "id": "81",
        "Rua": "RUA 7",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
	"CEP": "18548-014",
    },

    {
        "id": "82",
        "Rua": "CASTELO BRANCO KM 97,5 - Cond. CAMPO REAL",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
	"CEP": "18548-024",
    },

    {
        "id": "83",
        "Rua": "ROD CASTELO BRANCO KM 98",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
	"CEP": "18548-024",
    },

    {
        "id": "84",
        "Rua": "ROD. ANTONIO PIRES DE ALMEIDA KM 17",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
	"CEP": "",
    },

    {
        "id": "85",
        "Rua": "RUA 18",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
	"CEP": " ",
    },

    {
        "id": "86",
        "Rua": "FAZENDA CAIC",
        "Equipe": "VERMELHA",
        "Micro": "07 - AGROVILA CAIC SETOR I",
        "Posto": "CAIC",
	"CEP": "18540-991",
    },

    {
        "id": "87",
        "Rua": "GRANJA PORTO FELIZ - ROD. EMERECIANO PRESTES DE BARROS KM 12",
        "Equipe": "VERMELHA",
        "Micro": "07 - AGROVILA CAIC SETOR I",
        "Posto": "CAIC",
	"CEP": " ",
    },

    {
        "id": "88",
        "Rua": "ESTRADA CAÇAPAVA",
        "Equipe": "VERMELHA",
        "Micro": "07 - AGROVILA CAIC SETOR I",
        "Posto": "CAIC",
	"CEP": " ",
    },

    {
        "id": "89",
        "Rua": "ALAMEDA DA SAUDADE",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-334",
    },

    {
        "id": "90",
        "Rua": "ALEXANDRE FERRARI",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-320",
    },

    {
        "id": "91",
        "Rua": "TRAVESSA ANTONIO NUNES",
        "Equipe": "BRANCA",
        "Micro": "01 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-234",
    },

    {
        "id": "92",
        "Rua": "ANTONIO TEODORO ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-324",
    },

    {
        "id": "93",
        "Rua": "BENEDITO FERRARI",
        "Equipe": "BRANCA",
        "Micro": "01 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-224",
    },

    {
        "id": "94",
        "Rua": "DIRCEU MARIA STETTNER",
        "Equipe": "BRANCA",
        "Micro": "01 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-226",
    },

    {
        "id": "95",
        "Rua": "DOLORES GARCIA ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES SANTA CLARA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-314",
    },

    {
        "id": "96",
        "Rua": "EUGENIO EUGIDIO ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES SANTA CLARA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-316",
    },

    {
        "id": "97",
        "Rua": "IRTON MAURICIO DE OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-236",
    },

    {
        "id": "98",
        "Rua": "JOSE ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-322",
    },

    {
        "id": "99",
        "Rua": "LUIZ ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-328",
    },

    {
        "id": "100",
        "Rua": "MANOEL POLICORPIO ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-326",
    },

    {
        "id": "101",
        "Rua": "NELO RODRIGUES DE ARRUDA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-230",
    },

    {
        "id": "102",
        "Rua": "PAULO DE OLIVEIRA DINIZ",
        "Equipe": "BRANCA",
        "Micro": "01 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-232",
    },

    {
        "id": "103",
        "Rua": "PERIMETRAL MARIO COVAS",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
	"CEP": " ",
    },

    {
        "id": "104",
        "Rua": "RAFAEL ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES CELIA MARIA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-330",
    },

    {
        "id": "105",
        "Rua": "ZACARIAS CADETE DA SILVA",
        "Equipe": "BRANCA",
        "Micro": "01 - RES SANTA CLARA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-312",
    },

    {
        "id": "106",
        "Rua": "ARACY SAMPAIO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-154",
    },

    {
        "id": "107",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-158",
    },

    {
        "id": "108",
        "Rua": "BENEDITO MARTINS SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-152",
    },

    {
        "id": "109",
        "Rua": "JOAQUIM SAMPAIO SOBRINHO",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-150",
    },

    {
        "id": "110",
        "Rua": "JOSE GIULI BATISTA",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-148",
    },

    {
        "id": "111",
        "Rua": "JOSE LATURRAGE",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-156",
    },

    {
        "id": "112",
        "Rua": "MANOEL ITAGIBA DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-144",
    },

    {
        "id": "113",
        "Rua": "OTACILIO MARTINS SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-146",
    },

    {
        "id": "114",
        "Rua": "OTHONIEL SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "02 - VILA MANDUQUINHA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-140",
    },

    {
        "id": "115",
        "Rua": "ARACY SAMPAIO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM BORBA GATO",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-124",
    },

    {
        "id": "116",
        "Rua": "FRANCISCO NUNES SECKLER",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM SECKLER",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-086",
    },

    {
        "id": "117",
        "Rua": "MAURICIO DA MATTA OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM BORBA GATO",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-128",
    },

    {
        "id": "118",
        "Rua": "MAURO BATISTA DE SOUZA",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM SECKLER",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-090",
    },

    {
        "id": "119",
        "Rua": "ROSALINA BRISOLA ANTUNES",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM SECKLER",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-088",
    },

    {
        "id": "120",
        "Rua": "SAO JOSE",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM SECKLER",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-082",
    },

    {
        "id": "121",
        "Rua": "TERCIO PAES LEITE",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM SECKLER",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-084",
    },

    {
        "id": "122",
        "Rua": "FLORIANO TORRES",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM BORBA GATO",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-134",
    },

    {
        "id": "123",
        "Rua": "GUERINO BELON",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM BORBA GATO",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-132",
    },

    {
        "id": "124",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM BORBA GATO",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-122",
    },

    {
        "id": "125",
        "Rua": "SAMUEL GOMES DE TOLEDO",
        "Equipe": "BRANCA",
        "Micro": "03 - JARDIM BORBA GATO",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-130",
    },

    {
        "id": "126",
        "Rua": "ALBERTO FERNANDES DE CAMARGO",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-184",
    },

    {
        "id": "127",
        "Rua": "ANISIO FERRAZ SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-180",
    },

    {
        "id": "128",
        "Rua": "ANTONIO SYLVIO CUNHA BUENO",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-174",
    },

    {
        "id": "129",
        "Rua": "AQUILES JORGE DE OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-186",
    },

    {
        "id": "130",
        "Rua": "BENEDITO FERRARI",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-224",
    },

    {
        "id": "131",
        "Rua": "CONRADO ANGELIERI",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-214",
    },

    {
        "id": "132",
        "Rua": "DAYSE APARECIDA LEITE NASRALLAH",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-212",
    },

    {
        "id": "133",
        "Rua": "JOSE FERRARI",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-168",
    },

    {
        "id": "134",
        "Rua": "JULITA DE SOUZA SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-170",
    },

    {
        "id": "135",
        "Rua": "LEONTINA CHATEL STETNER",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-216",
    },

    {
        "id": "136",
        "Rua": "LIDIA MARIA POTEL",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-238",
    },

    {
        "id": "137",
        "Rua": "MAESTRO BENTO VALINI",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-176",
    },

    {
        "id": "138",
        "Rua": "MANOEL GONÇALVES SANTANA",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-182",
    },

    {
        "id": "139",
        "Rua": "MARIA DE LOURDES ABIBE ARANHA",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-172",
    },

    {
        "id": "140",
        "Rua": "MARIA VITORIA DELBOUX",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-210",
    },

    {
        "id": "141",
        "Rua": "ORLANDO DALSÓGLIO",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-222",
    },

    {
        "id": "142",
        "Rua": "ROQUE VIEIRA DA CRIZ",
        "Equipe": "BRANCA",
        "Micro": "04 - JARDIM JULITA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-166",
    },

    {
        "id": "143",
        "Rua": "VALDEMAR DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "04 - RES RAFAEL ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-218",
    },

    {
        "id": "144",
        "Rua": "AGOSTINHO ALCALA",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-018",
    },

    {
        "id": "145",
        "Rua": "ANERES CAMARGO ROCHA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-050",
    },

    {
        "id": "146",
        "Rua": "ANTONIO CAETANO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-042",
    },

	{
        "id": "146",
        "Rua": "ANTONIO CAETANO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-036",
    },

    {
        "id": "147",
        "Rua": "CEZALTINA SACRAMENTO PERPETUO",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-024",
    },

    {
        "id": "148",
        "Rua": "CONRADO CARUBA",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-046",
    },

    {
        "id": "149",
        "Rua": "FRANCISCO DE SOUZA MORAES",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-046",
    },

    {
        "id": "150",
        "Rua": "GABRIEL ANTONIO DE CARVALHO",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-016",
    },

    {
        "id": "151",
        "Rua": "IRACEMA PORTELA SACRAMENTO",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-022",
    },

    {
        "id": "152",
        "Rua": "IVETA GIBIM ALCALA (A PARTIR DE 133)",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-028",
    },

    {
        "id": "153",
        "Rua": "JOAO TOMAZ DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-044",
    },

    {
        "id": "154",
        "Rua": "MAESTRO VOLTAIRE TORRES",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-026",
    },

    {
        "id": "155",
        "Rua": "MARIA DULCELINA PRESTES",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-048",
    },

    {
        "id": "156",
        "Rua": "MARIA GESSIA SAMPAIO RUBINI",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-054",
    },

	{
        "id": "157",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
		"CEP": "",
    },
    
	{
        "id": "157",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
		"CEP": "",
    },

    {
        "id": "158",
        "Rua": "NAIR ANTUNES DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-020",
    },

    {
        "id": "159",
        "Rua": "PRAÇA FRANCISCO DE PADUA NAHUM",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-032",
    },

    {
        "id": "160",
        "Rua": "SILVINO TRISTAO DE CAMARGO",
        "Equipe": "BRANCA",
        "Micro": "05 - VILA AMERICA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18546-052",
    },

    {
        "id": "161",
        "Rua": "AZALEAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18547-186",
    },

    {
        "id": "162",
        "Rua": "CAMELIAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18547-202",
    },

    {
        "id": "163",
        "Rua": "CRAVOS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18547-190",
    },

    {
        "id": "164",
        "Rua": "CRISANTEMOS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-194",
    },

    {
        "id": "165",
        "Rua": "FRANCISCO DE SOUZA MORAES",
        "Equipe": "BRANCA",
        "Micro": "06 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-038",
    },

	{
        "id": "165",
        "Rua": "FRANCISCO DE SOUZA MORAES",
        "Equipe": "BRANCA",
        "Micro": "06 - VILA AMÉRICA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-040",
    },

	{
        "id": "165",
        "Rua": "FRANCISCO DE SOUZA MORAES",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-200",
    },

    {
        "id": "166",
        "Rua": "GIRASSOIS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-206",
    },

    {
        "id": "167",
        "Rua": "HORTENCIAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-184",
    },

    {
        "id": "168",
        "Rua": "JOAO TOMAZ DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-044",
    },

    {
        "id": "169",
        "Rua": "LIRIOS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-192",
    },

    {
        "id": "170",
        "Rua": "PALMAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18547-211",
    },

    {
        "id": "171",
        "Rua": "SANTA CRUZ (A PARTIR DE 940)",
        "Equipe": "BRANCA",
        "Micro": "06 - VILA ALCALA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-000",
    },

    {
        "id": "172",
        "Rua": "MIOSOTES",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18547-182",
    },

    {
        "id": "173",
        "Rua": "MARGARIDAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-198",
    },

    {
        "id": "174",
        "Rua": "ORQUIDEAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-180",
    },

    {
        "id": "175",
        "Rua": "GERANIOS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
	"CEP": "18547-208",
    },

    {
        "id": "176",
        "Rua": "DALIAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-204",
    },

    {
        "id": "177",
        "Rua": "ROSAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-214",
    },

    {
        "id": "178",
        "Rua": "TULIPAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-212",
    },

    {
        "id": "178",
        "Rua": "DJALMA DE OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "04 - PORTAL VALE DO SOL",
        "Posto": "VILA AMÉRICA",
		"CEP": "18546-202",
    },

    {
        "id": "179",
        "Rua": "VIOLETAS",
        "Equipe": "BRANCA",
        "Micro": "06 - JARDIM BELA VISTA",
        "Posto": "VILA AMÉRICA",
		"CEP": "18547-210",
    },

	    {
        "id": "180",
        "Rua": "FAZENDINHA SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "181",
        "Rua": "SITIO TRES IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "182",
        "Rua": "SITIO ARVORE GRANDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "183",
        "Rua": "SITIO BEIRA RIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "184",
        "Rua": "SITIO MONTE CARMELO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "185",
        "Rua": "SITIO SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "186",
        "Rua": "SITIO SANTA HELENA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "187",
        "Rua": "SITIO BOA VISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "188",
        "Rua": "SITIO SANTA RITA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "189",
        "Rua": "SITIO SAO JOAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "190",
        "Rua": "SITIO NOEMIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "191",
        "Rua": "FAZENDA DELTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "192",
        "Rua": "SITIO CANAA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "193",
        "Rua": "SITIO SOLO RICO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "194",
        "Rua": "SITIO RECANTO SHALON",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "195",
        "Rua": "SITIO PESQUEIRO BELA VISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "196",
        "Rua": "FAZENDA SANTA CRUZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "197",
        "Rua": "SITIO SANTA INES",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "198",
        "Rua": "SITIO PAINEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "199",
        "Rua": "SITIO BOA ESPERANÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "200",
        "Rua": "SITIO SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "201",
        "Rua": "SITIO EU E ELA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "202",
        "Rua": "SITIO SANTA SONIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "203",
        "Rua": "SITIO PRIMAVERA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "204",
        "Rua": "LOTEAMENTO SANTO AUGUSTO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "205",
        "Rua": "RUA MANOEL DE ABREU",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "206",
        "Rua": "RUA VICENTE DE CARVALHO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "207",
        "Rua": "SITIO SANTA ELZA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "208",
        "Rua": "SITIO MONORO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "209",
        "Rua": "SITIO FRANVINI",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "210",
        "Rua": "SITIO DUAS IRMAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "211",
        "Rua": "SITIO BOM RETIRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "212",
        "Rua": "RUA GUILHERME DE ALMEIDA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "213",
        "Rua": "RUA ALVES DE AZEVEDO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "214",
        "Rua": "RUA CANDIDO PORTINARI",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "215",
        "Rua": "ESTRADA VELHA PORTO FELIZ A SOROCABA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "216",
        "Rua": "SÍTIO YPÊ",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "217",
        "Rua": "CHÁCARA NARDI",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "218",
        "Rua": "BAIRRO GRAMADINHO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "219",
        "Rua": "SITIO ROLOBRAZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "220",
        "Rua": "SITIO SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "221",
        "Rua": "SITIO ASA BRANCA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "222",
        "Rua": "CHACARA SONHO MEU",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "223",
        "Rua": "RECANTO VALE DO SOL",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "224",
        "Rua": "SITIO SAO VICENTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "225",
        "Rua": "SITIO SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "226",
        "Rua": "ESTRADA MUNICIPAL PROXIMO CALIMAN",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "227",
        "Rua": "SITIO BOM JESUS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "228",
        "Rua": "SITIO RENASCER",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "229",
        "Rua": "SITIO SAO JORGE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "230",
        "Rua": "CHACARA DAS VITORIAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "231",
        "Rua": "SITIO DOIS IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "232",
        "Rua": "SITIO AGUA BRANCA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "233",
        "Rua": "GRANJA SHINODA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "234",
        "Rua": "SITIO COQUEIRINHO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "235",
        "Rua": "SITIO RANCHO TRIANGULO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "236",
        "Rua": "SITIO BOA ESPERANÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "237",
        "Rua": "SITIO GRAMADO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "238",
        "Rua": "SITIO RECANTO DAS ROSA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "239",
        "Rua": "SITIO SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "240",
        "Rua": "SITIO NINHO DO SOLO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "241",
        "Rua": "SITIO VO DUBETO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "242",
        "Rua": "SITIO DA VOVO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "243",
        "Rua": "ESTRADA MUNICIPAL PROXIMA AO SHINODA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "244",
        "Rua": "HARAS TIBERTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "245",
        "Rua": "SITIO DOS CUNHADOS J. A.",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "246",
        "Rua": "CHACARA DA UVA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "247",
        "Rua": "CHACARA LUAN",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "248",
        "Rua": "CHACARA DA OLIVETE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "249",
        "Rua": "CHACARA FREDERICO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "250",
        "Rua": "CHACARA SANTA TERESA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "251",
        "Rua": "SITIO MANGA LARGA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "252",
        "Rua": "SITIO DUAS PAINEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "253",
        "Rua": "SITIO BANANAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "254",
        "Rua": "SITIO DAS ARARAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "255",
        "Rua": "CONDOMINIO SPRING VALLEY",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "256",
        "Rua": "SITIO SANTA CRUZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "257",
        "Rua": "SITIO PORTO RESERVA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "258",
        "Rua": "SITIO RESIDENCIA ODELIO LEITE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "259",
        "Rua": "FAZENDA SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "260",
        "Rua": "MUMU",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "261",
        "Rua": "SAO LEOPOLDO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "262",
        "Rua": "SAO PAULO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "263",
        "Rua": "SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "264",
        "Rua": "SAO MARCOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "265",
        "Rua": "SAO ROQUE",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "266",
        "Rua": "SAO JOAO BATISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "267",
        "Rua": "SAO SEBASTIAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "268",
        "Rua": "SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "269",
        "Rua": "PRUDENTE DE MORAES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "270",
        "Rua": "FRANCISCO PITOCHE",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "271",
        "Rua": "DIOGO ANTONIO FEIJO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "272",
        "Rua": "MONTEIRO LOBATO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "273",
        "Rua": "EMILIO RIBAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "274",
        "Rua": "OSVALDO CRUZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "275",
        "Rua": "JOSE BONIFACIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "276",
        "Rua": "CARLOS GOMES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "277",
        "Rua": "DOS CHAVANTES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "278",
        "Rua": "DOS BANDEIRANTES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "279",
        "Rua": "DA MANGUEIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "280",
        "Rua": "DOS MARACATINS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "281",
        "Rua": "DAS TANGUINAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "282",
        "Rua": "MOEMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "283",
        "Rua": "MOACI",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "284",
        "Rua": "MIRUNA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "285",
        "Rua": "CHANEIS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "286",
        "Rua": "ITACIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "287",
        "Rua": "BAIRRO ESTRADA BOM RETIRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "288",
        "Rua": "BAIRRO GRAMADO",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "289",
        "Rua": "RUA LARANJEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "290",
        "Rua": "RUA SEM SAIDA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "291",
        "Rua": "RUA CAMBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "292",
        "Rua": "RUA PEROBA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "293",
        "Rua": "RUA IPE",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "294",
        "Rua": "CONDOMINIO VILA D'AGUA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "295",
        "Rua": "FARM RUA DOS CARVALHOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "296",
        "Rua": "FARM RUA DOS EUCALIPTOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "297",
        "Rua": "FARM RUA IPE",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "298",
        "Rua": "RUA CARAMURU",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "299",
        "Rua": "ESTRADA VELHA DE SOROCABA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "300",
        "Rua": "RUA DOS TAMOIOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "301",
        "Rua": "RUA TUPINIGUINS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "302",
        "Rua": "RUA CESI",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "303",
        "Rua": "RUA DOS COCAIS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "304",
        "Rua": "RUA DO TACAPI",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "305",
        "Rua": "RUA BARTIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "306",
        "Rua": "RUA CARINANS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "307",
        "Rua": "FENO - ROD. CASTELO BRANCO KM 94",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "308",
        "Rua": "SITIO MADRIGAL ROD. CASTELO BRANCO KM 95",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "309",
        "Rua": "FAZENDA ANA MARIA (RAFAEL JULIANO)",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "310",
        "Rua": "ESTRADA CAMPININHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "311",
        "Rua": "RANCHO BERACA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "312",
        "Rua": "SITIO DA BAGOA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "313",
        "Rua": "SITIO SAO LUIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "314",
        "Rua": "SITIO SAO JOAO BATISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "315",
        "Rua": "SITIO DOIS IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "316",
        "Rua": "SITIO VISTA ALEGRE",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "317",
        "Rua": "SITIO YPE ROXO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "318",
        "Rua": "SITIO NOSSA SENHORA DE FATIMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "319",
        "Rua": "CHACARA ANA MARIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "320",
        "Rua": "SITIO TRES PODERES",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "321",
        "Rua": "SITIO MINA DE OURO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "322",
        "Rua": "SITIO ALECRIM",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "323",
        "Rua": "SITIO BOM PASTOR",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "324",
        "Rua": "SITIO ALVORADA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "325",
        "Rua": "SITIO SEIS IRMÃOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "326",
        "Rua": "SITIO CASTELO FELIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "327",
        "Rua": "SITIO NOVOS RUMOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "328",
        "Rua": "SITIO SOL LUAR",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "329",
        "Rua": "CHACARA BOM JESUS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "330",
        "Rua": "SITIO RIO VERDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "331",
        "Rua": "SITIO MARIA REGINA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "332",
        "Rua": "RECANTO DO PAPITO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "333",
        "Rua": "SITIO NOSSA SENHORA RAINHA DA PAZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "334",
        "Rua": "SITIO SANTA MARIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "335",
        "Rua": "HARAS SCARPACCIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "336",
        "Rua": "SITIO SAO FRANCISCO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "337",
        "Rua": "RECANTO SANTA CECILIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "338",
        "Rua": "CHACARA IRAMAR",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "339",
        "Rua": "CHACARA SANTA HELENA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "340",
        "Rua": "SITIO CHAPARAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "341",
        "Rua": "SITIO DO VAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "342",
        "Rua": "CHACARA QUINTA DOS R'S",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "343",
        "Rua": "SITIO NOSSA SENHORA DAS DORES",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "344",
        "Rua": "SITIO BUENA GENTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "345",
        "Rua": "CHACARA VISTA ALEGRE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "346",
        "Rua": "CHACARA NOSSO CAIO RECANTO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "347",
        "Rua": "CHACARA 4C",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "348",
        "Rua": "CHACARA ESTANCIA ARARUNA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "349",
        "Rua": "CHACARA RECANTO FELIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "350",
        "Rua": "CHACARA UM SONHO A MAIS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "351",
        "Rua": "CHACARA FUFALO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "352",
        "Rua": "CHACARA TONHO DO MEL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "353",
        "Rua": "CHACARA SOL DA PRIMAVERA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "354",
        "Rua": "CHACARA DOI IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "355",
        "Rua": "CHACARA VIEIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "356",
        "Rua": "SITIO SAO SILVANO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "357",
        "Rua": "SITIO MANDUCA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "358",
        "Rua": "SITIO TRAVIU",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "359",
        "Rua": "CHACARA SANTA RITA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "360",
        "Rua": "SITIO BOA VISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "361",
        "Rua": "SITIO SAO JUDAS TADEU",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "362",
        "Rua": "SITIO VALE DO SOL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "363",
        "Rua": "CHACARA BRUNO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "364",
        "Rua": "CHACARA ROSA DE SHARON",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "365",
        "Rua": "SITIO BUGAVILLE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "366",
        "Rua": "SITIO MENDONÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "367",
        "Rua": "SITIO SOL DA PRIMAVERA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "368",
        "Rua": "SITIO SAO JUDAS TADEU",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "369",
        "Rua": "SITIO SAO BENEDITO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "370",
        "Rua": "SITIO BRASILIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "371",
        "Rua": "SITIO ELISABETE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "372",
        "Rua": "SITIO YANASE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "373",
        "Rua": "FAZENDA SANTA GEMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "374",
        "Rua": "SITIO DAS PALMEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "375",
        "Rua": "SITIO VENTANIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "376",
        "Rua": "SITIO SONHO VERDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "377",
        "Rua": "HARAS COAGATTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "378",
        "Rua": "SITIO ALBA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "379",
        "Rua": "CHACARA MANE FREET",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "380",
        "Rua": "SITIO PINHEIRAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "381",
        "Rua": "SITIO SAO JOSE DOS NETOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "382",
        "Rua": "SITIO SAO LUIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "383",
        "Rua": "SITIO SANTA CECILIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "384",
        "Rua": "SITIO SANTA FE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "385",
        "Rua": "SITIO CAMBUI",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "386",
        "Rua": "SITIO ITALIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "387",
        "Rua": "SITIO MURAYMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "388",
        "Rua": "SITIO DAS VIDEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "389",
        "Rua": "CHACARA CAMBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "390",
        "Rua": "SITIO SAO BENEDITO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "391",
        "Rua": "SITIO ELIAN",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "392",
        "Rua": "SITIO SAO LUIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "393",
        "Rua": "SITIO SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "394",
        "Rua": "SITIO CASA NOSTRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "395",
        "Rua": "SITIO OURO VERDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "396",
        "Rua": "SITIO CINCO ESTRELAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "397",
        "Rua": "CHACARA CLARINA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "398",
        "Rua": "CHACARA SUCEGO DO ZE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "399",
        "Rua": "CHACARA DO ODILON",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "400",
        "Rua": "SITIO DAS PENHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "401",
        "Rua": "SITIO SAO GERALDO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "402",
        "Rua": "FAZENDA VALLE DO SOL",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "403",
        "Rua": "SÍTIO IAIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "404",
        "Rua": "SITIO RAINHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "405",
        "Rua": "SITIO SANTA BARBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "406",
        "Rua": "SITIO SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "407",
        "Rua": "FAZENDA MONÇOES",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "408",
        "Rua": "SITIO SANTA AMELIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "409",
        "Rua": "SITIO SAO SEBASTIAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "410",
        "Rua": "SITIO NOSSA SENHORA DA PENHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "411",
        "Rua": "SITIO DO JAPONES",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "412",
        "Rua": "SITIO BENEDETTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "413",
        "Rua": "SITIO BOA ESPERANÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "414",
        "Rua": "FAZENDA SAO JOAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "415",
        "Rua": "SITIO DOS CARNEIROS",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "416",
        "Rua": "SITIO GIBIMBA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "417",
        "Rua": "HARAS VILLA SAN JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "418",
        "Rua": "HARAS MABLUCK",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "419",
        "Rua": "HARAS PITASSABA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "420",
        "Rua": "HARAS CENTRO HIPICO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "421",
        "Rua": "SITIO SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "422",
        "Rua": "CHACARA SAMUARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "423",
        "Rua": "SITIO GRAMADO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "424",
        "Rua": "SITIO DOIS COQUEIROS",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "425",
        "Rua": "SÍTIO DANTA BARBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "426",
        "Rua": "SITIO DO LIMAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "427",
        "Rua": "SITIO SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "428",
        "Rua": "SITIO NOSSA SENHORA DAS DORES",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

    {
        "id": "429",
        "Rua": "SITIO SEU NILSON",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
        "CEP": "18549-899",
    },

{
        "id": "430",
        "Rua": "JOSE AVANCINI",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-151"
    },
    {
        "id": "431",
        "Rua": "SAO PEDRO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-153"
    },
    {
        "id": "432",
        "Rua": "JOSE MANOEL ANTUNES",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-202"
    },
    {
        "id": "433",
        "Rua": "ALEXANDRE BAZZO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-206"
    },
    {
        "id": "434",
        "Rua": "JOAO AVANCINI",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-204"
    },
    {
        "id": "435",
        "Rua": "GINDA TOME BAZZO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-208"
    },
    {
        "id": "436",
        "Rua": "ARARITAGUABA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-145"
    },
    {
        "id": "437",
        "Rua": "JOAO PESSOA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-131"
    },
    {
        "id": "438",
        "Rua": "PEDRO FERNANDES DE CAMARGO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-133"
    },
    {
        "id": "439",
        "Rua": "MONTEIRO LOBATO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-129"
    },
    {
        "id": "440",
        "Rua": "BENEDITO AUGUSTO DE OLIVEIRA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-127"
    },
    {
        "id": "441",
        "Rua": "OTHONI JOAQUIM DE SOUZA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-125"
    },
    {
        "id": "442",
        "Rua": "GERALDO ESMÉDIO PIRES",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
        "CEP": "18540-139"
    },
    {
        "id": "443",
        "Rua": "JOAO PORTELA SOBRINHO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-310"
    },
    {
        "id": "444",
        "Rua": "MARECHAL DEODORO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-121"
    },
    {
        "id": "445",
        "Rua": "JUSTINO GOMIDE BUENO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-330"
    },
    {
        "id": "446",
        "Rua": "NEWTON PRADO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-119"
    },
    {
        "id": "447",
        "Rua": "OTONI JOAQUIM DE SOUZA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-125"
    },
    {
        "id": "448",
        "Rua": "TRAVESSA ALBERTO GERTH",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-123"
    },
    {
        "id": "449",
        "Rua": "ANTONIO MANCIO DE CAMARGO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-324"
    },
    {
        "id": "450",
        "Rua": "LUIZ ALBERTO DE ARUDA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-322"
    },
    {
        "id": "451",
        "Rua": "JOSE MOTA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-320"
    },
    {
        "id": "452",
        "Rua": "ADEMAR DE BARROS",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-073"
    },
    {
        "id": "453",
        "Rua": "BENEDITO JOSE DIANA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-328"
    },
    {
        "id": "454",
        "Rua": "MILTON BISTAFA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
        "CEP": "18540-314"
    },
    {
        "id": "455",
        "Rua": "JOSE MAURINO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-093"
    },
    {
        "id": "456",
        "Rua": "BELMIRA MORAES FERNANDES",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-095"
    },
    {
        "id": "457",
        "Rua": "JOAQUIM OLAVO DE CARVALHO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-099"
    },
    {
        "id": "458",
        "Rua": "RUI BARBOSA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-117"
    },
    {
        "id": "459",
        "Rua": "TRAVESSA TESTILDE HENRIQUE",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-137"
    },
    {
        "id": "460",
        "Rua": "PRAÇA EUGENIO MOTA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-135"
    },
    {
        "id": "461",
        "Rua": "NEWTON PRADO - 1 A 163",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-119"
    },
    {
        "id": "462",
        "Rua": "PRAÇA LAURO MAURINO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-141"
    },
    {
        "id": "463",
        "Rua": "DOMINGOS MAURINO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-149"
    },
    {
        "id": "464",
        "Rua": "BENEDITO LISBOA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-143"
    },
    {
        "id": "465",
        "Rua": "ALTINO ARANTES",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-147"
    },
    {
        "id": "466",
        "Rua": "PRAÇA CORONEL ESMEDIO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-069"
    },
    {
        "id": "467",
        "Rua": "ANDRE ROCHA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-057"
    },
    {
        "id": "468",
        "Rua": "ADHEMAR DE BARROS - 436 A 596",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-073"
    },
    {
        "id": "469",
        "Rua": "JOSE BENEDITO NORONHA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
        "CEP": "18540-097"
    },
    {
        "id": "470",
        "Rua": "LUIZA MINELLI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-326"
    },
    {
        "id": "471",
        "Rua": "VICENTE RAVAZIO",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-306"
    },
    {
        "id": "472",
        "Rua": "SILVINO NOBREGA DA SILVA",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-308"
    },
    {
        "id": "473",
        "Rua": "SALVADOR ARRUDA",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-304"
    },
    {
        "id": "474",
        "Rua": "VICENTE GUARINI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-115"
    },
    {
        "id": "475",
        "Rua": "CONEGO BELOTI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-107"
    },
    {
        "id": "476",
        "Rua": "JULIO PRESTES DE ALBUQUERQUE",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-113"
    },
    {
        "id": "477",
        "Rua": "CONSTANTINI GUARINI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-103"
    },
    {
        "id": "478",
        "Rua": "AV. ANTONIO PIRES DE ALMEIDA",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-077"
    },
    {
        "id": "479",
        "Rua": "LICIO MARCONDES DO AMARAL",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-109"
    },
    {
        "id": "480",
        "Rua": "BARAO DO RIO BRANCO",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-087"
    },
    {
        "id": "481",
        "Rua": "MIGUEI ELIAS ZAETI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-101"
    },
    {
        "id": "482",
        "Rua": "PRINCESA ISABEL",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
        "CEP": "18540-111"
    },
    {
        "id": "483",
        "Rua": "SANTA CRUZ (ATÉ 939)",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-085"
    },
    {
        "id": "484",
        "Rua": "DOUTOR ALVIM",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-071"
    },
    {
        "id": "485",
        "Rua": "ANTONIO MARTINS SAMPAIO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-083"
    },
    {
        "id": "486",
        "Rua": "ARCILIO BORGES",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-043"
    },
    {
        "id": "487",
        "Rua": "ADEMAR DE BARROS",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-073"
    },
    {
        "id": "488",
        "Rua": "ANTONIO PIRES DE AMEIDA",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-077"
    },
    {
        "id": "489",
        "Rua": "BANDEIRANTES",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-061"
    },
    {
        "id": "490",
        "Rua": "JOSE MARTINS BASTOS",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-065"
    },
    {
        "id": "491",
        "Rua": "JOAO TUANI",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-292"
    },
    {
        "id": "492",
        "Rua": "MARIO TUANI",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-294"
    },
    {
        "id": "493",
        "Rua": "PALMEIRAS",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-079"
    },
    {
        "id": "494",
        "Rua": "JOSE ANTONIO LEME",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-081"
    },
    {
        "id": "495",
        "Rua": "BARAO DO RIO BRANCO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-087"
    },
    {
        "id": "496",
        "Rua": "CUSTODIO SACRAMENTO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-053"
    },
    {
        "id": "497",
        "Rua": "BENEDITO STETNER",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-091"
    },
    {
        "id": "498",
        "Rua": "JOSE SACRAMENTO E SILVA",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-055"
    },
    {
        "id": "499",
        "Rua": "BRASIL",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-067"
    },
    {
        "id": "500",
        "Rua": "SABINO JOSE MELO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-089"
    },
    {
        "id": "501",
        "Rua": "DRACO DE ALBUQUERQUE",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
        "CEP": "18540-059"
    },
    {
        "id": "502",
        "Rua": "CEZARIO CASTELUCCI",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18542-244"
    },
    {
        "id": "503",
        "Rua": "ARCILIO BORGES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-043"
    },
    {
        "id": "504",
        "Rua": "JOAQUIM AGOSTINHO TORRES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-033"
    },
    {
        "id": "505",
        "Rua": "CANDIDO MOTTA",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-021"
    },
    {
        "id": "505",
        "Rua": "ANTONIO MAGNATTI",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-017"
    },
    {
        "id": "506",
        "Rua": "PRAÇA DUQUE DE CAXIAS",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-019"
    },
    {
        "id": "507",
        "Rua": "JOSE BONIFÁCIO",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-051"
    },
    {
        "id": "508",
        "Rua": "PADRE LIDRO",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-045"
    },
    {
        "id": "509",
        "Rua": "TRISTAO PIRES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-037"
    },
    {
        "id": "510",
        "Rua": "ANTONIO PIRES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-039"
    },
    {
        "id": "511",
        "Rua": "JOAO ANGELIERI",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-041"
    },
    {
        "id": "512",
        "Rua": "FLODOALDO BUENO DE CAMARGO",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-027"
    },
    {
        "id": "513",
        "Rua": "GASTAO VIDIGAL",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-025"
    },
    {
        "id": "514",
        "Rua": "JOAO MOREIRA SALLES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
        "CEP": "18540-035"
    },

{
        "id": "515",
        "Rua": "FRANCISCO GOMES TOLEDO",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-206"
    },
    {
        "id": "516",
        "Rua": "RUTH PEREIRA TUANI",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-204"
    },
    {
        "id": "517",
        "Rua": "ASSALIM ZAURO",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-200"
    },
    {
        "id": "518",
        "Rua": "ANGELINA DE JESUS DIAS DE TOLEDO",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-202"
    },
    {
        "id": "519",
        "Rua": "ANTONIO GONZAGA",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-212"
    },
    {
        "id": "520",
        "Rua": "LAZARO DE CAMPOS",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-214"
    },
    {
        "id": "521",
        "Rua": "MARIA DA GLORIA VIEIRA",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-210"
    },
    {
        "id": "522",
        "Rua": "JARBAS SEABRA LEAL",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-208"
    },
    {
        "id": "523",
        "Rua": "HOMERO AMBRÓSIO",
        "Equipe": "LARANJA",
        "Micro": "01",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-216"
    },
    {
        "id": "524",
        "Rua": "AVENIDA LICIO MARCONDES DO AMARAL",
        "Equipe": "LARANJA",
        "Micro": "02",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-180"
    },
    {
        "id": "525",
        "Rua": "CARLOS GOMES",
        "Equipe": "LARANJA",
        "Micro": "02",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-196"
    },
    {
        "id": "526",
        "Rua": "BOA VISTA",
        "Equipe": "LARANJA",
        "Micro": "02",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-194"
    },
    {
        "id": "527",
        "Rua": "SANTA INES",
        "Equipe": "LARANJA",
        "Micro": "02",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-192"
    },
    {
        "id": "528",
        "Rua": "HENRIQUE DIAS",
        "Equipe": "LARANJA",
        "Micro": "02",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-190"
    },
    {
        "id": "529",
        "Rua": "VIOLETA DE ARRUDA MELO BRUSCO",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-188"
    },
    {
        "id": "530",
        "Rua": "EMILIO COLI",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-198"
    },
    {
        "id": "531",
        "Rua": "PRIMO BENVEGNU",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-186"
    },
    {
        "id": "532",
        "Rua": "PADRE BENTO",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-184"
    },
    {
        "id": "533",
        "Rua": "ANTENOR FERRAZ DE OLIVEIRA",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-178"
    },
    {
        "id": "534",
        "Rua": "NOVE DE JULHO",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-176"
    },
    {
        "id": "535",
        "Rua": "DOMINGOS JORGE VELHO",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-172"
    },
    {
        "id": "536",
        "Rua": "BARTOLOMEU BUENO",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-182"
    },
    {
        "id": "537",
        "Rua": "ANTONIO RAPOSO TAVARES",
        "Equipe": "LARANJA",
        "Micro": "03",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-174"
    },
    {
        "id": "538",
        "Rua": "FERNAO DIAS - ATÉ 560",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-168"
    },
    {
        "id": "539",
        "Rua": "LOURENÇO TAQUES",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-166"
    },
    {
        "id": "540",
        "Rua": "PASCOAL MOREIRA",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-164"
    },
    {
        "id": "541",
        "Rua": "BORBA GATO",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-160"
    },
    {
        "id": "542",
        "Rua": "BARTOLOMEU BUENO",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-162"
    },
    {
        "id": "543",
        "Rua": "ABNER DE CAMARGO",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-148"
    },
    {
        "id": "544",
        "Rua": "JOAO DE ALMEIDA",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-150"
    },
    {
        "id": "545",
        "Rua": "LURDES XAVIER MARTELINI",
        "Equipe": "LARANJA",
        "Micro": "04",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-152"
    },
    {
        "id": "546",
        "Rua": "FERNANDO STECCA",
        "Equipe": "LARANJA",
        "Micro": "05",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-138"
    },
    {
        "id": "547",
        "Rua": "FELIPE FELIX",
        "Equipe": "LARANJA",
        "Micro": "05",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-136"
    },
    {
        "id": "548",
        "Rua": "MARCELINO ALVES",
        "Equipe": "LARANJA",
        "Micro": "05",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-134"
    },
    {
        "id": "549",
        "Rua": "THOMAZ CORTEZ",
        "Equipe": "LARANJA",
        "Micro": "05",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-132"
    },
    {
        "id": "550",
        "Rua": "OLYNTHO BAPTISTELA",
        "Equipe": "LARANJA",
        "Micro": "05",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-098"
    },
    {
        "id": "551",
        "Rua": "ANTONIO CARLOS MARCOLINO POLAZ",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-086"
    },
    {
        "id": "552",
        "Rua": "FREDERICO PALMIERI",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-096"
    },
    {
        "id": "553",
        "Rua": "BRAXISTER DE CAMARGO",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18540-462"
    },
    {
        "id": "554",
        "Rua": "JOEL BRIENZA",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-094"
    },
    {
        "id": "555",
        "Rua": "ALFEU TROMBINI",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-088"
    },
    {
        "id": "556",
        "Rua": "EVAIR DE OLIVEIRA",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-084"
    },
    {
        "id": "557",
        "Rua": "ANTONIO BONINI",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-082"
    },
    {
        "id": "558",
        "Rua": "PEDRO MIRANDA",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-146"
    },
    {
        "id": "559",
        "Rua": "OLYMPIO FRANCISCO DE MORAES",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-144"
    },
    {
        "id": "560",
        "Rua": "OTACILIO RODRIGUES",
        "Equipe": "LARANJA",
        "Micro": "06",
        "Posto": "VILA ANGELICA",
        "CEP": "18542-474"
    },
    {
        "id": "561",
        "Rua": "MARIA JOSE SOARES",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-064"
    },
    {
        "id": "562",
        "Rua": "LAERTE CARLOS",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-070"
    },
    {
        "id": "563",
        "Rua": "PEDRO PAULO GHIRALDI",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-072"
    },
    {
        "id": "564",
        "Rua": "BENEDICTO / BENEDITO ANTUNES SOARES",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-068"
    },
    {
        "id": "565",
        "Rua": "VALDIR DE LARA",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-066"
    },
    {
        "id": "566",
        "Rua": "IBRAIM PAES DA MOTA",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-056"
    },
    {
        "id": "567",
        "Rua": "MITRE FIUZA AYRES",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-050"
    },
    {
        "id": "568",
        "Rua": "CLOTILDE RUSSO AYRES",
        "Equipe": "LARANJA",
        "Micro": "07",
        "Posto": "VILA ANGELICA",
        "CEP": "18547-052"
    },

{
        "id": "1",
        "Rua": "ALFREDO ROGADO (AR)",
        "Bairro": "Conj. Habitacional Eugênio Motta",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "5 - DEISE",
        "CEP": "18542-458",
        "Posto": "POPULAR"
    },
    {
        "id": "2",
        "Rua": "ALAN KARDEC (AK)",
        "Bairro": "Convívio do Santo",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-434",
        "Posto": "POPULAR"
    },
    {
        "id": "3",
        "Rua": "ANGELO FUSTAINO (AF)",
        "Bairro": "Conj. Habitacional Benedito José Diana",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-380",
        "Posto": "POPULAR"
    },
    {
        "id": "4",
        "Rua": "APARICIO PIRES (AP)",
        "Bairro": "Conj. Habitacional Eugênio Motta",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "5 - DEISE",
        "CEP": "18542-456",
        "Posto": "POPULAR"
    },
    {
        "id": "5",
        "Rua": "AURELIA VERONEZE GUTIERREZ (AVG)",
        "Bairro": "Conj. Habitacional Benedito José Diana",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-388",
        "Posto": "POPULAR"
    },
    {
        "id": "6",
        "Rua": "BENEDITO APARECIDO MANFRINATI (BAM)",
        "Bairro": "Conj. Habitacional Benedito José Diana",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-390",
        "Posto": "POPULAR"
    },
    {
        "id": "7",
        "Rua": "BOM JESUS (BJ)",
        "Bairro": "Convívio do Santo",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-438",
        "Posto": "POPULAR"
    },
    {
        "id": "8",
        "Rua": "BOM PASTOR (BP)",
        "Bairro": "Convívio do Santo",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-432",
        "Posto": "POPULAR"
    },
    {
        "id": "9",
        "Rua": "DANIEL DE CAMARGO TABORDA (DCT) - (5-297)",
        "Bairro": "Conjunto Habitacional Eugênio Motta (até 175)",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "4 - JANE",
        "CEP": "18542-460",
        "Posto": "POPULAR"
    },
    {
        "id": "10",
        "Rua": "HANS REDER (HR)",
        "Bairro": "Conj. Habitacional Eugênio Motta",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "5 - DEISE",
        "CEP": "18542-454",
        "Posto": "POPULAR"
    },
    {
        "id": "11",
        "Rua": "JOAO DIANA SOBRINHO (JDS) - 348 em diante",
        "Bairro": "Jardim Excelsior",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-324",
        "Posto": "POPULAR"
    },
    {
        "id": "12",
        "Rua": "MAESTRO MANOEL JOSE DE CACALAZANS (MMJC)",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "4 - JANE",
        "CEP": "18542-374",
        "Posto": "POPULAR"
    },
    {
        "id": "13",
        "Rua": "MAHATMA GANDHI (MG)",
        "Bairro": "Convívio do Santo",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-430",
        "Posto": "POPULAR"
    },
    {
        "id": "14",
        "Rua": "MARCO AURELIO BATISTELA (MAB)",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "5 - DEISE",
        "CEP": "18542-472",
        "Posto": "POPULAR"
    },
    {
        "id": "15",
        "Rua": "MARIA EUGENIA PIMENTA DIANA (MEPD) - 137-303",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "2",
        "CEP": "18542-360",
        "Posto": "POPULAR"
    },
    {
        "id": "16",
        "Rua": "MARIO PIRES DE ALMEIDA (MPA)",
        "Bairro": "Jardim Excelsior",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-320",
        "Posto": "POPULAR"
    },
    {
        "id": "17",
        "Rua": "OLIVIO TOME (OT)",
        "Bairro": "Jardim Excelsior",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "2",
        "CEP": "18542-326",
        "Posto": "POPULAR"
    },
    {
        "id": "18",
        "Rua": "OSVALDO NOVAES DE CARVALHO (ONC) - 125-309",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "4 - JANE",
        "CEP": "18542-366",
        "Posto": "POPULAR"
    },
    {
        "id": "19",
        "Rua": "OTONIEL RODRIGUES (OR)",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "5 - DEISE",
        "CEP": "18542-474",
        "Posto": "POPULAR"
    },
    {
        "id": "20",
        "Rua": "PADRE JOSE DE ANCHIETA (PJA)",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "4 - JANE",
        "CEP": "18542-370",
        "Posto": "POPULAR"
    },
    {
        "id": "21",
        "Rua": "PLINIO MARTINS SIQUEIRA (PMS)",
        "Bairro": "Conj. Habitacional Benedito José Diana",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-384",
        "Posto": "POPULAR"
    },
    {
        "id": "22",
        "Rua": "REI DAVI (RD)",
        "Bairro": "Convívio do Santo",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "6",
        "CEP": "18542-436",
        "Posto": "POPULAR"
    },
    {
        "id": "23",
        "Rua": "SILVIO BOSCOLO (SB)",
        "Bairro": "Con. Habitacional Benedito José Diana",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "3 - ANDREIA",
        "CEP": "18542-386",
        "Posto": "POPULAR"
    },
    {
        "id": "24",
        "Rua": "SILVIO PELEGRINE - (SP) - 156-302",
        "Bairro": "Conjunto Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "2",
        "CEP": "18542-364",
        "Posto": "POPULAR"
    },
    {
        "id": "25",
        "Rua": "SUZETE TOME ALCALA (STA)",
        "Bairro": "Jardim Excelsior",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-322",
        "Posto": "POPULAR"
    },
    {
        "id": "26",
        "Rua": "VALTER ALBIEIRO (VA)",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "4 - JANE",
        "CEP": "18542-372",
        "Posto": "POPULAR"
    },
    {
        "id": "27",
        "Rua": "WALTER CASTELUCCI (WC)",
        "Bairro": "Conj. Habitacional Benedito José Diana",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "1 - FRANCIELLE",
        "CEP": "18542-382",
        "Posto": "POPULAR"
    },
    {
        "id": "28",
        "Rua": "AGEU AUGUSTO DA SILVA (AAS)",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-308",
        "Posto": "POPULAR"
    },
    {
        "id": "29",
        "Rua": "ALZIRA PREVITALI (AP)",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-318",
        "Posto": "POPULAR"
    },
    {
        "id": "30",
        "Rua": "ANGELO GASTARDELLO (AG)",
        "Bairro": "Rua Ângelo Gastardello",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-358",
        "Posto": "POPULAR"
    },
    {
        "id": "31",
        "Rua": "ANGELO GIOVANI MENEGON (AGM)",
        "Bairro": "Jardim Martelli",
        "Medico": "AMARELA",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-350",
        "Posto": "POPULAR"
    },
    {
        "id": "32",
        "Rua": "ANTONIO GIBIM (AG)",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JESSICA",
        "CEP": "18542-276",
        "Posto": "POPULAR"
    },
    {
        "id": "33",
        "Rua": "ARMANDO SALES DE OLIVEIRA (ASO) - 653 A 1070",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JESSICA",
        "CEP": "18542-260",
        "Posto": "POPULAR"
    },
    {
        "id": "34",
        "Rua": "AGOSTINHO ZARDETO (AZ)",
        "Bairro": "Jardim Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-354",
        "Posto": "POPULAR"
    },
    {
        "id": "35",
        "Rua": "AURORA MACHADO GUIMARAES (AMG)",
        "Bairro": "Conjunto Habitacional Agostinho Alcalá",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-362",
        "Posto": "POPULAR"
    },
    {
        "id": "36",
        "Rua": "AVELINO ALVES DE OLIVEIRA (AAO)",
        "Bairro": "Jardim Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-352",
        "Posto": "POPULAR"
    },
    {
        "id": "37",
        "Rua": "BENEDITA DE ALMEIDA LEAL (BAL)",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-314",
        "Posto": "POPULAR"
    },
    {
        "id": "38",
        "Rua": "DARIO MARTELI (DM)",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-226",
        "Posto": "POPULAR"
    },
    {
        "id": "39",
        "Rua": "FELICIO CASTELUCCI (FC) - 131 EM DIANTE",
        "Bairro": "Vila Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-244",
        "Posto": "POPULAR"
    },
    {
        "id": "40",
        "Rua": "GESSIA ODETE MORAES LISBOA (GOML) - 35 A 250",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-220",
        "Posto": "POPULAR"
    },
    {
        "id": "41",
        "Rua": "HUMBERTO MARTELLI (HM) - 134 EM DIANTE",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-232",
        "Posto": "POPULAR"
    },
    {
        "id": "42",
        "Rua": "ITAMAR SEGUNDO ALVES DE SANTANA (ISAS) - 29 A 181",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-312",
        "Posto": "POPULAR"
    },
    {
        "id": "43",
        "Rua": "JOAO DIANA SOBRINHO (JDS) - 15 A 257",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-324",
        "Posto": "POPULAR"
    },
    {
        "id": "44",
        "Rua": "JOAO MARINONIO DE CAMARGO (JMC) - 157 EM DIANTE",
        "Bairro": "Jardim Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-348",
        "Posto": "POPULAR"
    },
    {
        "id": "45",
        "Rua": "JOAO VICENTE FERREIRA (JVF)",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JESSICA",
        "CEP": "18542-278",
        "Posto": "POPULAR"
    },
    {
        "id": "46",
        "Rua": "JOSE CAETANO JESUS (JCJ) - 13, 17, 39",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-306",
        "Posto": "POPULAR"
    },
    {
        "id": "47",
        "Rua": "JOSE MARTINS TELES (JMT) - 05 A 835",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-300",
        "Posto": "POPULAR"
    },
    {
        "id": "48",
        "Rua": "JULIEN FOUQUE (JF) - 20 A 505",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-316",
        "Posto": "POPULAR"
    },
    {
        "id": "49",
        "Rua": "JULIO SOARES DIEL (JSD)",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-230",
        "Posto": "POPULAR"
    },
    {
        "id": "50",
        "Rua": "LAZARO DIAS SANTOS (LDS)",
        "Bairro": "Jardim Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-346",
        "Posto": "POPULAR"
    },
    {
        "id": "51",
        "Rua": "LUIZ CARLOS LISBOA (LCL) - 15 A 105",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-222",
        "Posto": "POPULAR"
    },
    {
        "id": "52",
        "Rua": "LUZIA DANIEL GHILBERT (LDG) - 47 A 77",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-302",
        "Posto": "POPULAR"
    },
    {
        "id": "53",
        "Rua": "MADRE SERAFINA (MS) - 164 A 420",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - CRISTIANE",
        "CEP": "18542-268",
        "Posto": "POPULAR"
    },
    {
        "id": "54",
        "Rua": "MARIA EUGENIA PIMENTA DIANA (MEPD) - 8-88",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-330",
        "Posto": "POPULAR"
    },
    {
        "id": "55",
        "Rua": "MARIA MARGARIDA PASCOAL (MMP)",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-310",
        "Posto": "POPULAR"
    },
    {
        "id": "56",
        "Rua": "MONSENHOR PIRES (MP) - 318 A 604",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - CRISTIANE",
        "CEP": "18542-272",
        "Posto": "POPULAR"
    },
    {
        "id": "57",
        "Rua": "OSVALDO NOVAES DE CARVALHO (ONC) - ATÉ 56",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-366",
        "Posto": "POPULAR"
    },
    {
        "id": "58",
        "Rua": "OTACILIO VALINI (OV)",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JESSICA",
        "CEP": "18542-280",
        "Posto": "POPULAR"
    },
    {
        "id": "59",
        "Rua": "OTONIEL MOTTA (OM) - 41 A 322",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - CRISTIANE",
        "CEP": "18542-274*",
        "Posto": "POPULAR"
    },
    {
        "id": "60",
        "Rua": "PADRE ALEXANDRE HOLDEAU (PAH) - 125 A 445",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "5 - CRISTIANE",
        "CEP": "18542-270",
        "Posto": "POPULAR"
    },
    {
        "id": "61",
        "Rua": "RODOLFO MOTTA (RM)",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "6 - JESSICA",
        "CEP": "18542-266",
        "Posto": "POPULAR"
    },
    {
        "id": "62",
        "Rua": "ROSA GUARINI MARTELLI (RGM)",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-228",
        "Posto": "POPULAR"
    },
    {
        "id": "63",
        "Rua": "SAID NEIFE (SN)",
        "Bairro": "Jardim Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-342",
        "Posto": "POPULAR"
    },
    {
        "id": "64",
        "Rua": "SILVIA MARTELLI (SM)",
        "Bairro": "Residencial Humberto Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "4",
        "CEP": "18542-224",
        "Posto": "POPULAR"
    },
    {
        "id": "65",
        "Rua": "SILVIO PELEGRINE (SP) - 7 A 87",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "3",
        "CEP": "18542-364",
        "Posto": "POPULAR"
    },
    {
        "id": "66",
        "Rua": "SUZANA FRANCO ROCCO (SFR)",
        "Bairro": "",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "",
        "Posto": "POPULAR"
    },
    {
        "id": "67",
        "Rua": "VALDEREZ PIRES (VP) - 98, 102, 112, 115, 120, 171",
        "Bairro": "Jardim Excelsior",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "1 - CLEISE",
        "CEP": "18542-304",
        "Posto": "POPULAR"
    },
    {
        "id": "68",
        "Rua": "VILMA MARIA BOSCOLO (VMB)",
        "Bairro": "Conj. Habitacional Eugênio Motta",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-450",
        "Posto": "POPULAR"
    },
    {
        "id": "69",
        "Rua": "VIRGILINO DE OLIVEIRA SANTOS (VOS)",
        "Bairro": "Jardim Martelli",
        "Medico": "NETHELE GABRIELLE",
        "Enfermeira": "Andrea",
        "Equipe": "AMARELA",
        "Micro": "2 - TATIANE",
        "CEP": "18542-340",
        "Posto": "POPULAR"
    },
    {
        "id": "70",
        "Rua": "ADA CALGARO CAVALANTE (AGC)",
        "Bairro": "Jardim Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-520",
        "Posto": "POPULAR"
    },
    {
        "id": "71",
        "Rua": "ALZIRO CARLOS (AC)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-276",
        "Posto": "POPULAR"
    },
    {
        "id": "72",
        "Rua": "ANTONIO DARIO (AD)",
        "Bairro": "Belo Alto",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "5 - GRAZIELE",
        "CEP": "18545-132",
        "Posto": "POPULAR"
    },
    {
        "id": "73",
        "Rua": "BENEDITO PRESTES SOUZA (BPS)",
        "Bairro": "Jardim Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-514",
        "Posto": "POPULAR"
    },
    {
        "id": "74",
        "Rua": "DOUTOR CELIO PRADO (DCP)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-278",
        "Posto": "POPULAR"
    },
    {
        "id": "75",
        "Rua": "CLARICE SANNA SERRALHEIRO (CSS)",
        "Bairro": "Conj. Habitacional Residencial Bello",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-156",
        "Posto": "POPULAR"
    },
    {
        "id": "76",
        "Rua": "CLEITON BAZZO CUCHERA (CBC)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-244",
        "Posto": "POPULAR"
    },
    {
        "id": "77",
        "Rua": "DANIEL DE CAMARGO TABORDA (DCT) - 298 EM DIANTE",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18542-470",
        "Posto": "POPULAR"
    },
    {
        "id": "78",
        "Rua": "DANIEL DA SILVA BRAGA (DSB)",
        "Bairro": "Jardim Esplanada",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-492",
        "Posto": "POPULAR"
    },
    {
        "id": "79",
        "Rua": "DANTE CAREZIA (DC)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-288",
        "Posto": "POPULAR"
    },
    {
        "id": "80",
        "Rua": "EDGAR MORAES (EM)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "5 - GRAZIELE",
        "CEP": "18545-266",
        "Posto": "POPULAR"
    },
    {
        "id": "81",
        "Rua": "FELIPE MANOEL DE CAMPOS (FMC)",
        "Bairro": "-Parque Residencial Água Branca",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "3 - MARCIA",
        "CEP": "18542-476",
        "Posto": "POPULAR"
    },
    {
        "id": "82",
        "Rua": "FLAVIA SAMPAIO BELLO (FSB)",
        "Bairro": "Belo Alto",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "5 - GRAZIELE",
        "CEP": "18545-136",
        "Posto": "POPULAR"
    },
    {
        "id": "83",
        "Rua": "FRANCISCO MIGUEL MACEDO (FMM)",
        "Bairro": "Jardim Esplanada",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-494",
        "Posto": "POPULAR"
    },
    {
        "id": "84",
        "Rua": "IRENE SEGATO (IS)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-242",
        "Posto": "POPULAR"
    },
    {
        "id": "85",
        "Rua": "JOAO BRASILIO DA SILVA (JBS)",
        "Bairro": "Conj. Habitacional Residencial Bello",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-150",
        "Posto": "POPULAR"
    },
    {
        "id": "86",
        "Rua": "JOAO GASTARDELI (JG)",
        "Bairro": "Jardim Esplanada",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-498",
        "Posto": "POPULAR"
    },
    {
        "id": "87",
        "Rua": "JOSE BARBOSA (JB)",
        "Bairro": "Jardim Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-516",
        "Posto": "POPULAR"
    },
    {
        "id": "88",
        "Rua": "JOSE MARTINS TELES (JMT) - 1135 A 1143",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-282",
        "Posto": "POPULAR"
    },
    {
        "id": "89",
        "Rua": "JOSE ROBERTO BATISTELA (JRB)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-272",
        "Posto": "POPULAR"
    },
    {
        "id": "90",
        "Rua": "LAURO GALVAO (LG)",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-484",
        "Posto": "POPULAR"
    },
    {
        "id": "91",
        "Rua": "LAURA STEINER DE CARVALHO (LSC)",
        "Bairro": "Conj. Habitacional Residencial Bello",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-154",
        "Posto": "POPULAR"
    },
    {
        "id": "92",
        "Rua": "LUIS TEMPESTA (LT)",
        "Bairro": "Jardim Esplanada",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-496",
        "Posto": "POPULAR"
    },
    {
        "id": "93",
        "Rua": "MARIO CAMILO FILHO (MCF)",
        "Bairro": "Jardim Rolando Giu",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-518",
        "Posto": "POPULAR"
    },
    {
        "id": "94",
        "Rua": "MARIO COVAS (MC) - 1985 A 2945",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "5 - GRAZIELE",
        "CEP": "18545-280",
        "Posto": "POPULAR"
    },
    {
        "id": "95",
        "Rua": "NORBERTO COELHO DE OLIVEIRA (NCO)",
        "Bairro": "Belo Alto",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "5 - GRAZIELE",
        "CEP": "18545-134",
        "Posto": "POPULAR"
    },
    {
        "id": "96",
        "Rua": "OCIREMA FERNANDES STETNER (OFS)",
        "Bairro": "Belo Alto",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "5 - GRAZIELE",
        "CEP": "18545-138",
        "Posto": "POPULAR"
    },
    {
        "id": "97",
        "Rua": "OLGA BRUGNEROTTO SGARIBOLDI (OBS)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-248",
        "Posto": "POPULAR"
    },
    {
        "id": "98",
        "Rua": "PAULO DE OLIVEIRA TAUHYL (POT)",
        "Bairro": "Jardim Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-500",
        "Posto": "POPULAR"
    },
    {
        "id": "99",
        "Rua": "PEDRO SGARIBOLDI (PS)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18545-284",
        "Posto": "POPULAR"
    },
    {
        "id": "100",
        "Rua": "PLINIO MARTINS TELES (PMT)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-264",
        "Posto": "POPULAR"
    },
    {
        "id": "101",
        "Rua": "ROBERVAL CAMARGO DE MORAES (RCM)",
        "Bairro": "Jardim Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-508",
        "Posto": "POPULAR"
    },
    {
        "id": "102",
        "Rua": "ROMEU CASTELUCCI (RC)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-270",
        "Posto": "POPULAR"
    },
    {
        "id": "103",
        "Rua": "SANTA LUCIA MAGOGA (SLM)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-236",
        "Posto": "POPULAR"
    },
    {
        "id": "104",
        "Rua": "SANTO SGARIBOLDI (SS)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-260",
        "Posto": "POPULAR"
    },
    {
        "id": "105",
        "Rua": "REVERENDO SILES BACARO (SB)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-238",
        "Posto": "POPULAR"
    },
    {
        "id": "106",
        "Rua": "ULISSES ALVES MACHADO (UAM)",
        "Bairro": "Conj. Habitacional Residencial Bello",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-152",
        "Posto": "POPULAR"
    },
    {
        "id": "107",
        "Rua": "VALDEMAR VERONEZE (VV)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-268",
        "Posto": "POPULAR"
    },
    {
        "id": "108",
        "Rua": "VERGINIO ANGELIERE (VA) - ATÉ 121",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "2 - RENATA",
        "CEP": "18542-478",
        "Posto": "POPULAR"
    },
    {
        "id": "108",
        "Rua": "VERGINIO ANGELIERE (VA) - A PARTIR DE 122",
        "Bairro": "Parque Residencial Água Branca",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "3 - MARCIA",
        "CEP": "18542-478",
        "Posto": "POPULAR"
    },
    {
        "id": "109",
        "Rua": "ADOLFO FERRARI (AF)",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-262",
        "Posto": "POPULAR"
    },
    {
        "id": "110",
        "Rua": "AMADEU MARTELLI (AM)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-076",
        "Posto": "POPULAR"
    },
    {
        "id": "111",
        "Rua": "ANTONIO BELLO (AB)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-096",
        "Posto": "POPULAR"
    },
    {
        "id": "112",
        "Rua": "ANTONIO LEITE ALMEIDA (ALA)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS",
        "CEP": "18542-058",
        "Posto": "POPULAR"
    },
    {
        "id": "113",
        "Rua": "ARMANDO RAMOS (AR) - 38 a 214",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS",
        "CEP": "18542-060",
        "Posto": "POPULAR"
    },
    {
        "id": "114",
        "Rua": "ARMANDO SALES DE OLIVEIRA (ASO) - 174-585",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-074",
        "Posto": "POPULAR"
    },
    {
        "id": "115",
        "Rua": "ARMANDO SALES DE OLIVEIRA (ASO) - 12-169",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS",
        "CEP": "18542-074",
        "Posto": "POPULAR"
    },
    {
        "id": "116",
        "Rua": "ATILIO COLI (AC)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-068",
        "Posto": "POPULAR"
    },
    {
        "id": "117",
        "Rua": "BENEDITO PIRES DE ARRUDA (BPA)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-072",
        "Posto": "POPULAR"
    },
    {
        "id": "118",
        "Rua": "BENEDITO DE TOLEDO VIEGAS / VIEIRA (BTV)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-106",
        "Posto": "POPULAR"
    },
    {
        "id": "119",
        "Rua": "BENEDITO VAZ CARDOSO (BVC)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-070",
        "Posto": "POPULAR"
    },
    {
        "id": "120",
        "Rua": "BOITUVA",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-156",
        "Posto": "POPULAR"
    },
    {
        "id": "121",
        "Rua": "CABREUVA",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-158",
        "Posto": "POPULAR"
    },
    {
        "id": "122",
        "Rua": "CANTIDIO / CANDIDO DE OLIVEIRA (CO)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-064",
        "Posto": "POPULAR"
    },
    {
        "id": "123",
        "Rua": "CERQUILHO",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-164",
        "Posto": "POPULAR"
    },
    {
        "id": "124",
        "Rua": "EVARISTO BAPTISTELLA (EB)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-100",
        "Posto": "POPULAR"
    },
    {
        "id": "125",
        "Rua": "FELICIO CASTELUCCI (FC) - ATÉ 130",
        "Bairro": "Vila Martelli",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-244",
        "Posto": "POPULAR"
    },
    {
        "id": "126",
        "Rua": "GENESIO RODRIGUES (GR)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS",
        "CEP": "18542-056",
        "Posto": "POPULAR"
    },
    {
        "id": "127",
        "Rua": "HUMBERTO MARTELLI (HM) - ATÉ 120",
        "Bairro": "Vila Martelli",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-240",
        "Posto": "POPULAR"
    },
    {
        "id": "128",
        "Rua": "INDAIATUBA",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-166",
        "Posto": "POPULAR"
    },
    {
        "id": "129",
        "Rua": "ITU",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-172",
        "Posto": "POPULAR"
    },
    {
        "id": "130",
        "Rua": "JOAO BATISTA DE CAMPOS (JBC)",
        "Bairro": "Jardim Sofia",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-182",
        "Posto": "POPULAR"
    },
    {
        "id": "131",
        "Rua": "JOAO MARINONIO DE CAMARGO (JMC) - ATÉ 140",
        "Bairro": "Vila Martelli",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-242",
        "Posto": "POPULAR"
    },
    {
        "id": "132",
        "Rua": "JOAO RODRIGUES DA SILVA (JRS)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18542-062",
        "Posto": "POPULAR"
    },
    {
        "id": "134",
        "Rua": "JOAQUIM PIRES ALMEIDA (JPA)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-066",
        "Posto": "POPULAR"
    },
    {
        "id": "135",
        "Rua": "JOSE GUERINI (JG)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-098",
        "Posto": "POPULAR"
    },
    {
        "id": "136",
        "Rua": "JOSE MARCELINO ANTUNES (JMA)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-102",
        "Posto": "POPULAR"
    },
    {
        "id": "137",
        "Rua": "JOSE TEIXEIRA DA FONSECA (JTF)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-078",
        "Posto": "POPULAR"
    },
    {
        "id": "138",
        "Rua": "LUIZ ANTONIO VIEIRA (LAV)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-110",
        "Posto": "POPULAR"
    },
    {
        "id": "139",
        "Rua": "LUIS CARLOS RINCK (LCR)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-108",
        "Posto": "POPULAR"
    },
    {
        "id": "140",
        "Rua": "LUIZ MARTELI (LM)",
        "Bairro": "Vila Martelli",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-254",
        "Posto": "POPULAR"
    },
    {
        "id": "141",
        "Rua": "MADRE SERAFINA (MS) - ATÉ 163",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-268",
        "Posto": "POPULAR"
    },
    {
        "id": "142",
        "Rua": "MARIA MARGARIDA COSSONICHE (MMC)",
        "Bairro": "Jardim Soﬁa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-184",
        "Posto": "POPULAR"
    },
    {
        "id": "143",
        "Rua": "MONSENHOR PIRES (MP) - ATÉ 286",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-272",
        "Posto": "POPULAR"
    },
    {
        "id": "144",
        "Rua": "NATALIO TAUHYL (NT)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-104",
        "Posto": "POPULAR"
    },
    {
        "id": "145",
        "Rua": "OLAVO ASSUMPÇAO FLEURY (OAF) - ATÉ 96",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS",
        "CEP": "18542-050",
        "Posto": "POPULAR"
    },
    {
        "id": "146",
        "Rua": "PADRE ALEXANDRE HORDEAU (PAH) - ATÉ 39",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-270",
        "Posto": "POPULAR"
    },
    {
        "id": "147",
        "Rua": "PASCOA BONINI GUERINI (PBG)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-092",
        "Posto": "POPULAR"
    },
    {
        "id": "148",
        "Rua": "PEDRO PAULO DE OLIVEIRA (PPO)",
        "Bairro": "Jardim Santa Eliza",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "5 - KAREN",
        "CEP": "18542-264*",
        "Posto": "POPULAR"
    },
    {
        "id": "149",
        "Rua": "PIRAPORA",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-160",
        "Posto": "POPULAR"
    },
    {
        "id": "150",
        "Rua": "ROQUE PLINIO DE CARVALHO (RPC)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS ",
        "CEP": "18542-052",
        "Posto": "POPULAR"
    },
    {
        "id": "151",
        "Rua": "SALTO",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "3 - MICHELE",
        "CEP": "18542-162",
        "Posto": "POPULAR"
    },
    {
        "id": "152",
        "Rua": "AVENIDA SANTA ROSA (ASR)",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-150",
        "Posto": "POPULAR"
    },
    {
        "id": "153",
        "Rua": "SOROCABA",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-168",
        "Posto": "POPULAR"
    },
    {
        "id": "154",
        "Rua": "TATUI",
        "Bairro": "Jardim Soﬁa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-180**",
        "Posto": "POPULAR"
    },
    {
        "id": "155",
        "Rua": "TIETE",
        "Bairro": "Jardim Santa Rosa",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "4 - MIRO",
        "CEP": "18542-170",
        "Posto": "POPULAR"
    },
    {
        "id": "156",
        "Rua": "ULISSES CORNELIO VITORINO (UCV)",
        "Bairro": "Vila Progresso",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "6 - GLADIS",
        "CEP": "18542-054",
        "Posto": "POPULAR"
    },
    {
        "id": "157",
        "Rua": "VITORIO BELO (VB)",
        "Bairro": "Residencial Bepim",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-094",
        "Posto": "POPULAR"
    },
    {
        "id": "158",
        "Rua": "GENESIO AZOLINE (GA)",
        "Bairro": "Residencial Portal Ville Ipê",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "2",
        "CEP": "18545-124",
        "Posto": "POPULAR"
    },
    {
        "id": "159",
        "Rua": "ALFREDO SALEM (AS)",
        "Bairro": "Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "4",
        "CEP": "18545-262",
        "Posto": "POPULAR"
    },
    {
        "id": "160",
        "Rua": "VICTORIO MARTELETTO (VM)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-234",
        "Posto": "POPULAR"
    },
    {
        "id": "161",
        "Rua": "MARIA DE LOURDES RIBEIRO DA SILVA SERAFIM (MLRSS)",
        "Bairro": "Parque Residencial São Marcos",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "6 - MARCIA",
        "CEP": "18545-274",
        "Posto": "POPULAR"
    },
    {
        "id": "162",
        "Rua": "JOSE OLIVEIRA DE SOUZA (JOS)",
        "Bairro": "Jardim Santa Terezinha",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-240",
        "Posto": "POPULAR"
    },
    {
        "id": "165",
        "Rua": "PERES VENTURA (PV)",
        "Bairro": "Conj. Habitacional Agostinho Alcalá",
        "Medico": "PEDRO",
        "Enfermeira": "Julia",
        "Equipe": "PRATA",
        "Micro": "4 - JANE",
        "CEP": "18542-368",
        "Posto": "POPULAR"
    },
    {
        "id": "166",
        "Rua": "TANCREDO DE ALMEIDA NEVES (TAN)",
        "Bairro": "Belo Alto",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "",
        "Posto": "POPULAR"
    },
    {
        "id": "167",
        "Rua": "LUIZ CARLOS LISBOA (LCL) - 106 EM DIANTE",
        "Bairro": "Residencial Portal Ville Ipê",
        "Medico": "GEISA",
        "Enfermeira": "Luana",
        "Equipe": "OURO",
        "Micro": "",
        "CEP": "18545-120",
        "Posto": "POPULAR"
    },
    {
        "id": "168",
        "Rua": "AMELIO BARNABE (AB)",
        "Bairro": "Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18542-522",
        "Posto": "POPULAR"
    },
    {
        "id": "169",
        "Rua": "CARDOSO PIMENTEL (CP)",
        "Bairro": "Belo Alto",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "",
        "CEP": "18545-130",
        "Posto": "POPULAR"
    },
    {
        "id": "170",
        "Rua": "PEDRO MOREAU (PM)",
        "Bairro": "Rolando Giuli",
        "Medico": "BRUNO",
        "Enfermeira": "Milene",
        "Equipe": "ROSA",
        "Micro": "1 - DAIANE",
        "CEP": "18542-502",
        "Posto": "POPULAR"
    }

	{
        "id": "152",
        "Rua": "IVETA GIBIM ALCALA (ATÉ 132)",
        "Equipe": "ROXA",
        "Micro": "",
        "Posto": "PATUCCI",
	"CEP": "",
    },

    {
        "id": "569",
        "Rua": "VOLTA DO POÇO",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },              
    
    {
        "id": "570",
        "Rua": "TERRAS DO PORTO",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

	 {
        "id": "",
        "Rua": "FRANCISCO POLI",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

	{
        "id": "",
        "Rua": "RESIDENCIAL ALTOS DO AVECUIA",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

	{
        "id": "",
        "Rua": "RESIDENCIAL PORTAL DAS ARARAS",
        "Equipe": "BRANCA",
        "Micro": "GOV. MARIO COVAS,20",
        "Posto": "VILA AMÉRICA",
    },
                                  
    {
        "id": "735",
        "Rua": "ANTONIO ARRAVAL FILHO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },
                                  
    {
        "id": "736",
        "Rua": "LUIZ DESPONTIM",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "737",
        "Rua": "JOSE MAURINO FILHO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "738",
        "Rua": "RICARDO VANDEVELO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "739",
        "Rua": "AQUILES JORGE STEINER",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "740",
        "Rua": "JOAO VERONEZE",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "741",
        "Rua": "ABNER HERACLITO DE CAMARGO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "742",
        "Rua": "SAO VICENTE",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "743",
        "Rua": "ANTONIO BRIENZA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "744",
        "Rua": "IGNACIO CHAGAS",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "745",
        "Rua": "OLIVIO BARBOSA (JD. MORUMBI)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "746",
        "Rua": "JOSE FERNANDES",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "747",
        "Rua": "JOAO BATISTA SCARANCE",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "748",
        "Rua": "PROFESSORA MARIA APARECIDA FERNANDES LEITE",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "749",
        "Rua": "ANTONIO PIRES DE ALMEIDA (JARDIM MORUMBI)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "750",
        "Rua": "ANITA GARIBALDI (ATÉ OS FUNDOS DA RODRIAL COM R. JUSTINO COMIDE)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "751",
        "Rua": "AVENIDA GETULIO VARGAS - (JARDIM MORUMBI)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "752",
        "Rua": "BENEDITO PINTO DO AMARAL",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "753",
        "Rua": "ARMANDO DIAS",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "754",
        "Rua": "EMILIA ANA ANTONIO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "755",
        "Rua": "BASIL FERNANDO LEROY",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },
                                  
    {
        "id": "756",
        "Rua": "SANTA ROSA (BAMBU)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "757",
        "Rua": "MAESTRO BENEDITO ROGADO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "758",
        "Rua": "FREDERICO BRANDI (DIVISA COM JD MORUMBI)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "759",
        "Rua": "TRAVESSA FREDERICO BRANDI",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "760",
        "Rua": "AVENIDA GETULIO VARGAS (BAMBU)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "761",
        "Rua": "CESARIO LEROY",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "762",
        "Rua": "LOURDES COSTA DE JESUS",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "763",
        "Rua": "ALCIDES COSTA ARANHA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "764",
        "Rua": "FRANCISCO OLIVEIRA LIMA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "765",
        "Rua": "JOAO ARANTES NETO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "766",
        "Rua": "ARISTIDES VALENTIM TORRES",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "767",
        "Rua": "WANDA PREVITALI THOME",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "768",
        "Rua": "ANTONIO PIRES DE ALMEIDA (JARDIM BELA FONTE)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "769",
        "Rua": "PEDRO FERRAZ DA SILVA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "770",
        "Rua": "ANTONIO PIRES DE ALMEIDA (JARDIM SÃO PEDRO)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "771",
        "Rua": "CONSELHEIRO MANOEL DIAS DE TOLEDO (CIDADE JARDIM)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "772",
        "Rua": "LAIS SOLANGE FERRAZ",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "773",
        "Rua": "SOLANGE DE FATIMA ZILI",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "774",
        "Rua": "SEBASTIAO XAVIER ANTUNES",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "775",
        "Rua": "LUIS DE BARROS PINHEIRO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },
                                  
    {
        "id": "776",
        "Rua": "ARMANDO HONORA (ATÉ ANTONIO PIRES DE ALMEIDA - LIMITE)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "777",
        "Rua": "ANTONIO PIRES DE ALMEIDA (CIDADE JARDIM)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "778",
        "Rua": "JOAO MENEGON (SEGATEX MADEIRAS)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "779",
        "Rua": "OTAVIO DE MORAES (ATÉ BRAXISTER DE CAMARGO - RUA SEMÁFORO COM A SIDNYL)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "780",
        "Rua": "GENTIL DE ARRUDA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "781",
        "Rua": "ANTONIO JACOMASSI",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "782",
        "Rua": "BELARMINO FELIX",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "783",
        "Rua": "JULIO ALVES DE OLIVEIRA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "784",
        "Rua": "ANTONIO PIRES DE ALMEIDA (DO OUTRO LADO DA SIDNYL)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "785",
        "Rua": "NOEL DE CAMARGO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "786",
        "Rua": "PAULINO DE BERNARDES",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "787",
        "Rua": "JOAO GONÇALVES DE CAMARGO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "788",
        "Rua": "RUA ANGELO DIANA (JARDIM PORTO FELIZ - PRAÇA ESCOLA BAMBU ATÉ EDIF AMÉRICA Nº 891)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "789",
        "Rua": "JOAO BATISTA FERRAZ (JARDIM PORTO FELIZ)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "790",
        "Rua": "RENATO RODOVALHO DE OLIVEIRA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "791",
        "Rua": "FRANCISCO ROCHA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "792",
        "Rua": "PROFESSOR JEFFERSON SOARES DE SOUZA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "793",
        "Rua": "SANTA COAN MORO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "794",
        "Rua": "ALBINO VALINI",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "795",
        "Rua": "CONSELHEIRO MANOEL DIAS DE TOLEDO (ATÉ ALBINO VALINI - PAR E IMPAR)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "796",
        "Rua": "AVENIDA GETULIO VARGAS (JARDIM BRASIL - SERVIDÃO DA CESARIO LEROY ATÉ CEMEX)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "797",
        "Rua": "BAHIA (JARDIM BRASIL)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "798",
        "Rua": "MINAS GERAIS (JARDIM BRASIL)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "799",
        "Rua": "HERMINIO LEROY",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "800",
        "Rua": "RIO GRANDE DO SUL (CORTA A RUA MINAS GERAIS)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "801",
        "Rua": "ANTONIO SOARES DE SOUZA",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "802",
        "Rua": "RUA ORTOFEN",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "803",
        "Rua": "MARANHÃO",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "804",
        "Rua": "AMAZONAS",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "805",
        "Rua": "PIAUI",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },
                                  
    {
        "id": "806",
        "Rua": "RIO GRANDE DO NORTE",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "807",
        "Rua": "RIO GRANDE DO SUL (JARDIM BRASIL I)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "808",
        "Rua": "AVENIDA TEXTIL GABRIEL (STEMMANN - ANTES DO RIACHO DA BAIXADA)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "809",
        "Rua": "CONDOMINIOS PORTAL I E II",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "810",
        "Rua": "PORTAL VILLE FALMBOYANT",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "811",
        "Rua": "TERRAS DE SAN RAFAEL",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },

                                  
    {
        "id": "812",
        "Rua": "PALMITAL (CHÁCARAS PRÓXIMAS DA PORTO SA)",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },
                                  
    {
        "id": "813",
        "Rua": "PORTO FELIZ SA - FUNDOS",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
    },
                              
    {
        "id": "814",
        "Rua": "LUIS GUTIERREZ RUIZ",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },
                              
    {
        "id": "815",
        "Rua": "LARISSA RAVELI",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

                              
    {
        "id": "816",
        "Rua": "FLORIANO PIRES",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

                              
    {
        "id": "817",
        "Rua": "CONDOMINIO SAO MATEUS",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

     {
        "id": "818",
        "Rua": "OSMILDO ROCHA",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "819",
        "Rua": "ANTENOR BELLON",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "820",
        "Rua": "FIORAVANTE MIETTO",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "821",
        "Rua": "JOSE ATILIO COLE",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "822",
        "Rua": "PEDRO GERALDO POLAZ",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "823",
        "Rua": "ANSELMO BUENO DE OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "824",
        "Rua": "FLAVIO SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "825",
        "Rua": "HENRIQUE WANDEVELD",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "826",
        "Rua": "ALEXANDRE AMBROSIO",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },

	 {
        "id": "827",
        "Rua": "LEONILDE CADETE DA SILVA",
        "Equipe": "BRANCA",
        "Micro": "",
        "Posto": "VILA AMÉRICA",
    },









];

state.data = data;
state.customData = data;
var tbody = document.getElementById("tbody");
state.valueSatus = "";
state.valueRua = "";
state.numberDisplay = 0;
var tbody = document.getElementById("tbody");


// // for (let key in data) {
// //     // console.log(data[key],key,);
// //     let elem = create_elment(data[key]);
// //     tbody.insertAdjacentHTML('beforeend',elem);

// // }

function getEquipe(self) {
    switch (self) {
        case 'PRATA':
            return 'class="Equipe prata"';
            break;
        case 'OURO':
            return 'class="Equipe ouro"';
            break;
        case 'AMARELA':
            return 'class="Equipe amarela"';
            break;
        case 'ROSA':
            return 'class="Equipe rosa"';
            break;
        case 'VERMELHA':
		    return 'class="Equipe vermelha"';
	    case 'LARANJA':
		    return 'class="Equipe laranja"';
	        break;
	    case 'ARCO-IRIS':
		    return 'class="Equipe arcoiris"';
	        break;
	    case 'ROXA':
		    return 'class="Equipe roxa"';
	        break;
	    case 'BRANCA':
		    return 'class="Equipe branca"';
	        break;
	    case 'BRONZE':
		    return 'class="Equipe bronze"';
	        break;
        case 'AZUL':
            	    return 'class="Equipe azul"';
           	break;
		case 'VERDE':
            	    return 'class="Equipe verde"';
           	break;
        default:
            return 'class="Equipe text-success"';
            break;
    }
}

function create_elment(item) {
    return `
    <tr>
        <td>${item.Rua}</td>
        <td><span `+ getEquipe(item.Equipe) + `><i class="fa fa-circle" style="font-size:22px"></i></span> ${item.Equipe}</td>                        
        <td>${item.Micro}</td>
        <td>${item.Posto}</td>
		<td>${item.CEP}</td>
    </tr>
    `;
}


loadData();

// console.log(get_text);
//ds

var numberBD = document.getElementById('number1').innerHTML;
var numberKT = document.getElementById('number2').innerHTML;

function loadData() {
    document.getElementById('number1').innerHTML = 1;
    document.getElementById('number2').innerHTML = 5;
    state.valueEntries = 5;
    state.valueEquipe = "Any";
    state.valueRua = "All";
    let data = state.customData.slice(0, 0);
    tbody.innerHTML = "";
    data.forEach(item => {
        tbody.insertAdjacentHTML('beforeend', create_elment(item));
    })
}


var select = document.getElementById("select-entries");
var num_entries;
var numPage;
var show;

var dem;

//tao li
function create_li(item) {
    return `
        <a onclick="changeclick(this)" href="#" class="page-link">${item}</a>
    `;
}
function changeclick(id) {
    return 1;
}

taosubpag();
ktshow();
chia_theo_show();
function taosubpag() {
    var subpage = document.getElementById("subpage");
    for (var i = 1; i <= Math.ceil(data.length / 5); i++) {
        var li = document.createElement("li");
        li.innerHTML = create_li(i);
        subpage.appendChild(li);
    }
};

function ktshow() {
    document.getElementById('select-entries').addEventListener('change', e => {
        let selectDataforEntry = state.customData.slice(0, e.target.value);
        tbody.innerHTML = "";
        selectDataforEntry.forEach(item => {
            tbody.insertAdjacentHTML('beforeend', create_elment(item));
        })
    });


}
var select = document.getElementById("select-entries");
var num_entries;
var numPage;
function chia_theo_show() {

    select.onchange = function () {
        var option = select.children;
        for (var i = 0; i < option.length; i++) {
            if (option[i].selected) {
                num_entries = option[i].value;
            }
        }
        numPage = Math.ceil(data.length / num_entries);
        document.getElementById('number1').innerHTML = 1;
        document.getElementById('number2').innerHTML = num_entries;
        subpage.innerHTML = "";
        for (var i = 1; i <= numPage; i++) {
            var li = document.createElement("li");
            li.innerHTML = create_li(i);
            li.value = i;
            subpage.appendChild(li);
        }
    }
}


var luaChon = subpage.children;
var page = document.getElementById("page");
var so;
    for (var i = 1; i <= luaChon.length; i++) {
        if (changeclick(luaChon[i])==1)
            so=i;
    }


    var search = document.getElementById("search");
search.addEventListener("keyup", function () {
    var searchValue = (document.getElementById("search").value).toLowerCase();
    tbody.innerHTML = "";
    if (searchValue == "")
        load();
    else {
        for (var i = 0; i < data.length; i++) {
            if (searchValue != "") {
                if (data[i].id.indexOf(searchValue) >= 0 || (data[i].Rua).toLowerCase().indexOf(searchValue) >= 0 || (data[i].Posto).toLowerCase().indexOf(searchValue) >= 0 || (data[i].Equipe).toLowerCase().indexOf(searchValue) >= 0)
                    xuat(data[i]);
            }

        }
    }
});

function xuat(item) {

    var tr = document.createElement("tr");
    tr.innerHTML = create_elment(item);
    tbody.appendChild(tr);
}

function load() {
    /*for (var i = 0; i < 0; i++) {
        //console.log(data[i]);
        //console.log(item);
        var tr = document.createElement("tr");
        tr.innerHTML = create_elment(data[i]);
        tbody.appendChild(tr);
    }*/
}
