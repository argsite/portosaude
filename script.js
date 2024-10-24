const state = {};

var data = [

    {
        "id": "1",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "2",
        "Rua": "ALAMEDA DAS SIBIPIRUNAS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "3",
        "Rua": "ALAMEDA DAS ESPATODEAS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "4",
        "Rua": "ALAMEDA DAS QUARESMEIRAS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "5",
        "Rua": "ALAMEDA DOS CEDROS",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "6",
        "Rua": "ALAMEDA DOS IPES",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "7",
        "Rua": "ALAMEDA VISTA ALEGRE",
        "Equipe": "AZUL",
        "Micro": "1 - VISTA ALEGRE",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "8",
        "Rua": "ISAIAS PALUDETO",
        "Equipe": "AZUL",
        "Micro": "1 - SÃO CARLOS",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "9",
        "Rua": "GERALDO CLEMENTE DA COSTA",
        "Equipe": "AZUL",
        "Micro": "1 - SÃO CARLOS",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "10",
        "Rua": "MARIA BENEDITA DOS SANTOS",
        "Equipe": "AZUL",
        "Micro": "1 - SÃO CARLOS",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "11",
        "Rua": "ADILSON ANTONIO ANTUNES DE CAMPOS",
        "Equipe": "AZUL",
        "Micro": "1 - RECANTO MONÇÕES",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "12",
        "Rua": "ANTONIO FRANCISCO NOGUEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RECANTO MONÇÕES",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "13",
        "Rua": "FRANCISCO FERRAZ DE OLIVEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RECANTO MONÇÕES",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "14",
        "Rua": "JOSE FERNANDO MIETO",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "15",
        "Rua": "ITALIA MENEGON PELEGRINE",
        "Equipe": "AZUL",
        "Micro": "RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "16",
        "Rua": "PROFESSOR JOAO CAMPOS VIEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "17",
        "Rua": "REINALDO ALVES DE OLIVEIRA",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "18",
        "Rua": "ARMANDO PELEGRINE",
        "Equipe": "AZUL",
        "Micro": "1 - RES MADALENA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "19",
        "Rua": "EDSON BICUDO DE ALMEIDA",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "20",
        "Rua": "JOAO BATISTA RODRIGUES",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "21",
        "Rua": "NORMA CINCILIO",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "22",
        "Rua": "ANA PAULA SALA FERRAZ",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "23",
        "Rua": "JURANDIR FERRAZ",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "24",
        "Rua": "VALDOMIRO DAL BO",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "25",
        "Rua": "LEOBINO LOPES DE BARROS",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "26",
        "Rua": "JOSE ANTONIO GIACOMELI",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "27",
        "Rua": "SAMUEL MARQUES",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "28",
        "Rua": "DOMINGOS RODRIGUES MARTINS",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "29",
        "Rua": "ALDERICO PRESTES DOS SANTOS",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "30",
        "Rua": "ARISTIDES MIGUEL MACEDO",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "31",
        "Rua": "RUA 13",
        "Equipe": "AZUL",
        "Micro": "1 - OLIVIO BARBOSA",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "32",
        "Rua": "ESTRADA MUNICIPAL XIRIRICA",
        "Equipe": "AZUL",
        "Micro": "1 - JARDIM PORTO CITY",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "33",
        "Rua": "IDALINA DE SOUZA MARTINS",
        "Equipe": "AZUL",
        "Micro": "1 - JARDIM PORTO CITY",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "34",
        "Rua": "ESTRADA MUNICIPAL LUIS ALCALA",
        "Equipe": "AZUL",
        "Micro": "1 - JARDIM PORTO CITY",
        "Posto": "VANTE",
        "ACS": "TIAGO",
    },

    {
        "id": "35",
        "Rua": "DOMINGOS TOME",
        "Equipe": "AZUL",
        "Micro": "2",
        "Posto": "VANTE",
        "ACS": "KAUAN",
    },

    {
        "id": "36",
        "Rua": "JOAO BATISTA MANTOVANI",
        "Equipe": "AZUL",
        "Micro": "2",
        "Posto": "VANTE",
        "ACS": "KAUAN",
    },

    {
        "id": "37",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "AZUL",
        "Micro": "2",
        "Posto": "VANTE",
        "ACS": "KAUAN",
    },

    {
        "id": "38",
        "Rua": "DOMINGOS TOME",
        "Equipe": "AZUL",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "39",
        "Rua": "SILVIO BRAND CORREA",
        "Equipe": "AZUL",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "40",
        "Rua": "AMADEU DE LARA",
        "Equipe": "AZUL",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "41",
        "Rua": "JOSE TEODORO DE ALMEIDA",
        "Equipe": "AZUL",
        "Micro": "4",
        "Posto": "VANTE",
    },

    {
        "id": "42",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "AZUL",
        "Micro": "4",
        "Posto": "VANTE",
    },

    {
        "id": "43",
        "Rua": "JOSEFINA SIMEIRA",
        "Equipe": "AZUL",
        "Micro": "4",
        "Posto": "VANTE",
    },

    {
        "id": "44",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
    },

    {
        "id": "45",
        "Rua": "RUA A",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
    },

    {
        "id": "46",
        "Rua": "RUA B",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
    },

    {
        "id": "47",
        "Rua": "AVENIDA 1",
        "Equipe": "AZUL",
        "Micro": "5 - ALTOS DO JEQUITIBA",
        "Posto": "VANTE",
        "ACS": "BRUNO",
    },

    {
        "id": "48",
        "Rua": "VALDIR JOSE FERRARI",
        "Equipe": "VERDE",
        "Micro": "1",
        "Posto": "VANTE",
    },

    {
        "id": "49",
        "Rua": "ISOLINA MARTINS TELES",
        "Equipe": "VERDE",
        "Micro": "1",
        "Posto": "VANTE",
    },

    {
        "id": "50",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "1",
        "Posto": "VANTE",
    },

    {
        "id": "51",
        "Rua": "PEDRO PAULO BAZZO",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
    },

    {
        "id": "52",
        "Rua": "ERNESTO DALSOGLIO",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
    },

    {
        "id": "53",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
    },

    {
        "id": "54",
        "Rua": "DOMINGOS TOME",
        "Equipe": "VERDE",
        "Micro": "2",
        "Posto": "VANTE",
    },

    {
        "id": "55",
        "Rua": "MARCOS STEINER SOBRINHO",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "56",
        "Rua": "JOSE TEODORO DE ALMEIDA",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "57",
        "Rua": "JOSE MARINONIO SOBRINHO",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "58",
        "Rua": "SILVIO BRAND CORREIA",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "59",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "3",
        "Posto": "VANTE",
    },

    {
        "id": "60",
        "Rua": "FELIX ROCCO",
        "Equipe": "VERDE",
        "Micro": "4",
        "Posto": "VANTE",
    },

    {
        "id": "61",
        "Rua": "ITALIA PREVITALI",
        "Equipe": "VERDE",
        "Micro": "4",
        "Posto": "VANTE",
    },

    {
        "id": "62",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "4",
        "Posto": "VANTE",
    },

    {
        "id": "63",
        "Rua": "LEONIDAS SAMPAIO",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "64",
        "Rua": "TEREZIANO PEREIRA DE CAMARGO",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "65",
        "Rua": "BENEDITA CAMPOS BONINE",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "66",
        "Rua": "JOÃO BATISTA ALBIEIRO",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "67",
        "Rua": "LUIS GERALDO MARTELI",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "68",
        "Rua": "VIRGILINO ROSA PIMENTA",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "69",
        "Rua": "SILVIO BRAND CORREIRA",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "70",
        "Rua": "ARISTIDES CANDIDO DA SILVA",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "71",
        "Rua": "IZA FILIETAZ LEITE",
        "Equipe": "VERDE",
        "Micro": "5",
        "Posto": "VANTE",
    },

    {
        "id": "72",
        "Rua": "RUA 1",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "73",
        "Rua": "RUA 2",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "74",
        "Rua": "RUA 3",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "75",
        "Rua": "CAIC ROÇA",
        "Equipe": "VERMELHA",
        "Micro": "01 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "76",
        "Rua": "RODOVIA ANTONIO PIRES DE ALMEIDA",
        "Equipe": "VERMELHA",
        "Micro": "01 - ITAQUI",
        "Posto": "CAIC",
    },

    {
        "id": "77",
        "Rua": "FAZENDA SAO DOMINGOS",
        "Equipe": "VERMELHA",
        "Micro": "01 - ITAQUI",
        "Posto": "CAIC",
    },

    {
        "id": "78",
        "Rua": "RUA 4",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "79",
        "Rua": "RUA 5",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "80",
        "Rua": "RUA 6",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "81",
        "Rua": "RUA 7",
        "Equipe": "VERMELHA",
        "Micro": "02 - AGROVILA CAIC SETOR II",
        "Posto": "CAIC",
    },

    {
        "id": "82",
        "Rua": "CASTELO BRANCO KM 97,5 - Cond. CAMPO REAL",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
    },

    {
        "id": "83",
        "Rua": "ROD CASTELO BRANCO KM 98",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
    },

    {
        "id": "84",
        "Rua": "ROD. ANTONIO PIRES DE ALMEIDA KM 17",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
    },

    {
        "id": "85",
        "Rua": "RUA 18",
        "Equipe": "VERMELHA",
        "Micro": "05 - AGROVILA CAIC SETOR III",
        "Posto": "CAIC",
    },

    {
        "id": "86",
        "Rua": "FAZENDA CAIC",
        "Equipe": "VERMELHA",
        "Micro": "07 - AGROVILA CAIC SETOR I",
        "Posto": "CAIC",
    },

    {
        "id": "87",
        "Rua": "GRANJA PORTO FELIZ - ROD. EMERECIANO PRESTES DE BARROS KM 12",
        "Equipe": "VERMELHA",
        "Micro": "07 - AGROVILA CAIC SETOR I",
        "Posto": "CAIC",
    },

    {
        "id": "88",
        "Rua": "ESTRADA CAÇAPAVA",
        "Equipe": "VERMELHA",
        "Micro": "07 - AGROVILA CAIC SETOR I",
        "Posto": "CAIC",
    },

    {
        "id": "89",
        "Rua": "ALAMEDA DA SAUDADE",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "90",
        "Rua": "ALEXANDRE FERRARI",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "91",
        "Rua": "ANTONIO NUNES",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "92",
        "Rua": "ANTONIO TEODORO ALCALÁ",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "93",
        "Rua": "BENEDITO FERRARI",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "94",
        "Rua": "DIRCEU MARIA STETNER",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "95",
        "Rua": "DOLORES ALCALÁ",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "96",
        "Rua": "EUGENIO EUGIDIO ALCALÁ",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "97",
        "Rua": "IRTON MAURICIO DE OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "98",
        "Rua": "JOSE ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "99",
        "Rua": "LUIZ ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "100",
        "Rua": "MANOEL POLICORPIO ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "101",
        "Rua": "NELO RODRIGUES DE ARRUDA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "102",
        "Rua": "PAULO DE OLIVEIRA DINIZ",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "103",
        "Rua": "PERIMETRAL MARIO COVAS",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "104",
        "Rua": "RAFAEL ALCALA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "105",
        "Rua": "ZACARIAS CADETE DA SILVA",
        "Equipe": "BRANCA",
        "Micro": "01",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "106",
        "Rua": "ARACI SAMPAIO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "107",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "108",
        "Rua": "BENEDITO MARTINS SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "109",
        "Rua": "JOAQUIM SAMPAIO SOBRINHO",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "110",
        "Rua": "JOSE GIULI BATISTA",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "111",
        "Rua": "JOSE LATURRAGE",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "112",
        "Rua": "MANOEL ITAGIBA DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "113",
        "Rua": "OTACILIO MARTINS SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "114",
        "Rua": "OTONIEL SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "02",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "115",
        "Rua": "ARACI SAMPAIO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "116",
        "Rua": "FRANCISCO NUNES SECKLER",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "117",
        "Rua": "MAURICIO DA MATTA OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "118",
        "Rua": "MAURO BATISTA DE SOUZA",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "119",
        "Rua": "ROSALINA BRISOLA ANTUNES",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "120",
        "Rua": "SAO JOSE",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "121",
        "Rua": "TERCIO PAES LEITE",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "122",
        "Rua": "FLORIANO TORRES",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "123",
        "Rua": "GUERINO BELON",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "124",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "125",
        "Rua": "SAMUEL GOMES DE TOLEDO",
        "Equipe": "BRANCA",
        "Micro": "03",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "126",
        "Rua": "ALBERTO FERNANDES DE CAMARGO",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "127",
        "Rua": "ANISIO FERRAZ SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "128",
        "Rua": "ANTONIO SILVIO CUNHA BUENO",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "129",
        "Rua": "AQUILES JORGE DE OLIVEIRA",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "130",
        "Rua": "BENEDITO FERRARI",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "131",
        "Rua": "CONRADO ANGELIERI",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "132",
        "Rua": "DAYSE APARECIDA LEITE NASRALLAH",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "133",
        "Rua": "JOSE FERRARI",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "134",
        "Rua": "JULITA DE SOUZA SAMPAIO",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "135",
        "Rua": "LEONTINA CHATEL STETNER",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "136",
        "Rua": "LÍDIA MARIA POTEL",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "137",
        "Rua": "MAESTRO BENTO VALINI",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "138",
        "Rua": "MANOEL GONÇALVES SANTANA",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "139",
        "Rua": "MARIA DE LOURDES ABIBE ARANHA",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "140",
        "Rua": "MARIA VITORIA DELBOUX",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "141",
        "Rua": "ORLANDO DALSÓGLIO",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "142",
        "Rua": "ROQUE VIEIRA DA CRIZ",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "143",
        "Rua": "VALDEMAR DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "04",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "144",
        "Rua": "AGOSTINHO ALCALA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "145",
        "Rua": "ANERES CAMARGO ROCHA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "146",
        "Rua": "ANTONIO CAETANO DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "147",
        "Rua": "CEZALTINA SACRAMENTO PERPETUO",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "148",
        "Rua": "CONRADO CARUBA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "149",
        "Rua": "FRANCISCO DE SOUZA MORAES",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "150",
        "Rua": "GABRIEL ANTONIO DE CARVALHO",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "151",
        "Rua": "IRACEMA PORTELA SACRAMENTO",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "152",
        "Rua": "IVETA GIBIM ALCALA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "153",
        "Rua": "JOAO THOMAZ DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "154",
        "Rua": "MAESTRO VOLTANE",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "155",
        "Rua": "MARIA DULCELINA PRESTES",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "156",
        "Rua": "MARIA GESSIA RUBINI",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "157",
        "Rua": "MONSENHOR SECKLER",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "158",
        "Rua": "NAIR ANTUNES DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "159",
        "Rua": "PRAÇA FRANCISCO PADUA NAHUM",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "160",
        "Rua": "SILVINO TRISTAO DE CAMARGO",
        "Equipe": "BRANCA",
        "Micro": "05",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "161",
        "Rua": "AZALEIAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "162",
        "Rua": "CAMELIAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "163",
        "Rua": "CRAVOS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "164",
        "Rua": "CRISANTEMOS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "165",
        "Rua": "FRANCISCO DE SOUZA MORAES",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "166",
        "Rua": "GIRASSOIS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "167",
        "Rua": "HORTENCIAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "168",
        "Rua": "JOAO THOMAZ DE ALMEIDA",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "169",
        "Rua": "LIRIOS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "170",
        "Rua": "PALMAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "171",
        "Rua": "SANTA CRUZ",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "172",
        "Rua": "MIOSOTES",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "173",
        "Rua": "MARGARIDAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "174",
        "Rua": "ORQUIDEAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "175",
        "Rua": "GERANIOS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "176",
        "Rua": "DALIAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "177",
        "Rua": "ROSAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "178",
        "Rua": "TULIPAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "179",
        "Rua": "VIOLETAS",
        "Equipe": "BRANCA",
        "Micro": "06",
        "Posto": "VILA AMÉRICA",
    },

    {
        "id": "180",
        "Rua": "FAZENDINHA SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "181",
        "Rua": "SITIO TRES IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "182",
        "Rua": "SITIO ARVORE GRANDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "183",
        "Rua": "SITIO BEIRA RIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "184",
        "Rua": "SITIO MONTE CARMELO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "185",
        "Rua": "SITIO SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "186",
        "Rua": "SITIO SANTA HELENA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "187",
        "Rua": "SITIO BOA VISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "188",
        "Rua": "SITIO SANTA RITA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "189",
        "Rua": "SITIO SAO JOAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "190",
        "Rua": "SITIO NOEMIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "191",
        "Rua": "FAZENDA DELTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "192",
        "Rua": "SITIO CANAA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "193",
        "Rua": "SITIO SOLO RICO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "194",
        "Rua": "SITIO RECANTO SHALON",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "195",
        "Rua": "SITIO PESQUEIRO BELA VISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "196",
        "Rua": "FAZENDA SANTA CRUZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "197",
        "Rua": "SITIO SANTA INES",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "198",
        "Rua": "SITIO PAINEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "199",
        "Rua": "SITIO BOA ESPERANÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "200",
        "Rua": "SITIO SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "201",
        "Rua": "SITIO EU E ELA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "202",
        "Rua": "SITIO SANTA SONIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "203",
        "Rua": "SITIO PRIMAVERA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "204",
        "Rua": "LOTEAMENTO SANTO AUGUSTO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "205",
        "Rua": "RUA MANOEL DE ABREU",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "206",
        "Rua": "RUA VICENTE DE CARVALHO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "207",
        "Rua": "SITIO SANTA ELZA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "208",
        "Rua": "SITIO MONORO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "209",
        "Rua": "SITIO FRANVINI",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "210",
        "Rua": "SITIO DUAS IRMAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "211",
        "Rua": "SITIO BOM RETIRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "212",
        "Rua": "RUA GUILHERME DE ALMEIDA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "213",
        "Rua": "RUA ALVES DE AZEVEDO",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "214",
        "Rua": "RUA CANDIDO PORTINARI",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "215",
        "Rua": "ESTRADA VELHA PORTO FELIZ A SOROCABA",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "216",
        "Rua": "SÍTIO YPÊ",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "217",
        "Rua": "CHÁCARA NARDI",
        "Equipe": "ARCO-IRIS",
        "Micro": "01",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "218",
        "Rua": "BAIRRO GRAMADINHO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "219",
        "Rua": "SITIO ROLOBRAZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "220",
        "Rua": "SITIO SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "221",
        "Rua": "SITIO ASA BRANCA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "222",
        "Rua": "CHACARA SONHO MEU",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "223",
        "Rua": "RECANTO VALE DO SOL",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "224",
        "Rua": "SITIO SAO VICENTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "225",
        "Rua": "SITIO SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "226",
        "Rua": "ESTRADA MUNICIPAL PROXIMO CALIMAN",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "227",
        "Rua": "SITIO BOM JESUS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "228",
        "Rua": "SITIO RENASCER",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "229",
        "Rua": "SITIO SAO JORGE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "230",
        "Rua": "CHACARA DAS VITORIAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "231",
        "Rua": "SITIO DOIS IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "232",
        "Rua": "SITIO AGUA BRANCA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "233",
        "Rua": "GRANJA SHINODA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "234",
        "Rua": "SITIO COQUEIRINHO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "235",
        "Rua": "SITIO RANCHO TRIANGULO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "236",
        "Rua": "SITIO BOA ESPERANÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "237",
        "Rua": "SITIO GRAMADO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "238",
        "Rua": "SITIO RECANTO DAS ROSA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "239",
        "Rua": "SITIO SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "240",
        "Rua": "SITIO NINHO DO SOLO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "241",
        "Rua": "SITIO VO DUBETO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "242",
        "Rua": "SITIO DA VOVO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "243",
        "Rua": "ESTRADA MUNICIPAL PROXIMA AO SHINODA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "244",
        "Rua": "HARAS TIBERTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "245",
        "Rua": "SITIO DOS CUNHADOS J. A.",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "246",
        "Rua": "CHACARA DA UVA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "247",
        "Rua": "CHACARA LUAN",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "248",
        "Rua": "CHACARA DA OLIVETE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "249",
        "Rua": "CHACARA FREDERICO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "250",
        "Rua": "CHACARA SANTA TERESA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "251",
        "Rua": "SITIO MANGA LARGA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "252",
        "Rua": "SITIO DUAS PAINEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "253",
        "Rua": "SITIO BANANAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "254",
        "Rua": "SITIO DAS ARARAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "255",
        "Rua": "CONDOMINIO SPRING VALLEY",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "256",
        "Rua": "SITIO SANTA CRUZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "257",
        "Rua": "SITIO PORTO RESERVA",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "258",
        "Rua": "SITIO RESIDENCIA ODELIO LEITE",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "259",
        "Rua": "FAZENDA SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "260",
        "Rua": "MUMU",
        "Equipe": "ARCO-IRIS",
        "Micro": "02",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "261",
        "Rua": "SAO LEOPOLDO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "262",
        "Rua": "SAO PAULO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "263",
        "Rua": "SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "264",
        "Rua": "SAO MARCOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "265",
        "Rua": "SAO ROQUE",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "266",
        "Rua": "SAO JOAO BATISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "267",
        "Rua": "SAO SEBASTIAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "268",
        "Rua": "SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "269",
        "Rua": "PRUDENTE DE MORAES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "270",
        "Rua": "FRANCISCO PITOCHE",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "271",
        "Rua": "DIOGO ANTONIO FEIJO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "272",
        "Rua": "MONTEIRO LOBATO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "273",
        "Rua": "EMILIO RIBAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "274",
        "Rua": "OSVALDO CRUZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "275",
        "Rua": "JOSE BONIFACIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "276",
        "Rua": "CARLOS GOMES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - GLEBA 2",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "277",
        "Rua": "DOS CHAVANTES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "278",
        "Rua": "DOS BANDEIRANTES",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "279",
        "Rua": "DA MANGUEIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "280",
        "Rua": "DOS MARACATINS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "281",
        "Rua": "DAS TANGUINAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "282",
        "Rua": "MOEMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "283",
        "Rua": "MOACI",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "284",
        "Rua": "MIRUNA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "285",
        "Rua": "CHANEIS",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "286",
        "Rua": "ITACIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "03 - COND. ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "287",
        "Rua": "BAIRRO ESTRADA BOM RETIRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "288",
        "Rua": "BAIRRO GRAMADO",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "289",
        "Rua": "RUA LARANJEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "290",
        "Rua": "RUA SEM SAIDA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "291",
        "Rua": "RUA CAMBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "292",
        "Rua": "RUA PEROBA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "293",
        "Rua": "RUA IPE",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "294",
        "Rua": "CONDOMINIO VILA D'AGUA",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "295",
        "Rua": "FARM RUA DOS CARVALHOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "296",
        "Rua": "FARM RUA DOS EUCALIPTOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "297",
        "Rua": "FARM RUA IPE",
        "Equipe": "ARCO-IRIS",
        "Micro": "04",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "298",
        "Rua": "RUA CARAMURU",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "299",
        "Rua": "ESTRADA VELHA DE SOROCABA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "300",
        "Rua": "RUA DOS TAMOIOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "301",
        "Rua": "RUA TUPINIGUINS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "302",
        "Rua": "RUA CESI",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "303",
        "Rua": "RUA DOS COCAIS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "304",
        "Rua": "RUA DO TACAPI",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "305",
        "Rua": "RUA BARTIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "306",
        "Rua": "RUA CARINANS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "307",
        "Rua": "FENO - ROD. CASTELO BRANCO KM 94",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "308",
        "Rua": "SITIO MADRIGAL ROD. CASTELO BRANCO KM 95",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "309",
        "Rua": "FAZENDA ANA MARIA (RAFAEL JULIANO)",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - ALDEIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "310",
        "Rua": "ESTRADA CAMPININHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "311",
        "Rua": "RANCHO BERACA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "312",
        "Rua": "SITIO DA BAGOA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "313",
        "Rua": "SITIO SAO LUIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "314",
        "Rua": "SITIO SAO JOAO BATISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "315",
        "Rua": "SITIO DOIS IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "316",
        "Rua": "SITIO VISTA ALEGRE",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "317",
        "Rua": "SITIO YPE ROXO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "318",
        "Rua": "SITIO NOSSA SENHORA DE FATIMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "319",
        "Rua": "CHACARA ANA MARIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "320",
        "Rua": "SITIO TRES PODERES",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "321",
        "Rua": "SITIO MINA DE OURO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "322",
        "Rua": "SITIO ALECRIM",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "323",
        "Rua": "SITIO BOM PASTOR",
        "Equipe": "ARCO-IRIS",
        "Micro": "05 - BAIRRO SEGATO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "324",
        "Rua": "SITIO ALVORADA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "325",
        "Rua": "SITIO SEIS IRMÃOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "326",
        "Rua": "SITIO CASTELO FELIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "327",
        "Rua": "SITIO NOVOS RUMOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "328",
        "Rua": "SITIO SOL LUAR",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "329",
        "Rua": "CHACARA BOM JESUS",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "330",
        "Rua": "SITIO RIO VERDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "331",
        "Rua": "SITIO MARIA REGINA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "332",
        "Rua": "RECANTO DO PAPITO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "333",
        "Rua": "SITIO NOSSA SENHORA RAINHA DA PAZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "334",
        "Rua": "SITIO SANTA MARIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "335",
        "Rua": "HARAS SCARPACCIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "05",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "336",
        "Rua": "SITIO SAO FRANCISCO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "337",
        "Rua": "RECANTO SANTA CECILIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "338",
        "Rua": "CHACARA IRAMAR",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "339",
        "Rua": "CHACARA SANTA HELENA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "340",
        "Rua": "SITIO CHAPARAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "341",
        "Rua": "SITIO DO VAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "342",
        "Rua": "CHACARA QUINTA DOS R'S",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "343",
        "Rua": "SITIO NOSSA SENHORA DAS DORES",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "344",
        "Rua": "SITIO BUENA GENTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - JACUTINGA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "345",
        "Rua": "CHACARA VISTA ALEGRE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "346",
        "Rua": "CHACARA NOSSO CAIO RECANTO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "347",
        "Rua": "CHACARA 4C",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "348",
        "Rua": "CHACARA ESTANCIA ARARUNA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "349",
        "Rua": "CHACARA RECANTO FELIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "350",
        "Rua": "CHACARA UM SONHO A MAIS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "351",
        "Rua": "CHACARA FUFALO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "352",
        "Rua": "CHACARA TONHO DO MEL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "353",
        "Rua": "CHACARA SOL DA PRIMAVERA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "354",
        "Rua": "CHACARA DOI IRMAOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "355",
        "Rua": "CHACARA VIEIRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "356",
        "Rua": "SITIO SAO SILVANO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "357",
        "Rua": "SITIO MANDUCA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "358",
        "Rua": "SITIO TRAVIU",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "359",
        "Rua": "CHACARA SANTA RITA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "360",
        "Rua": "SITIO BOA VISTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "361",
        "Rua": "SITIO SAO JUDAS TADEU",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "362",
        "Rua": "SITIO VALE DO SOL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "363",
        "Rua": "CHACARA BRUNO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "364",
        "Rua": "CHACARA ROSA DE SHARON",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "365",
        "Rua": "SITIO BUGAVILLE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "366",
        "Rua": "SITIO MENDONÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "367",
        "Rua": "SITIO SOL DA PRIMAVERA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "368",
        "Rua": "SITIO SAO JUDAS TADEU",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "369",
        "Rua": "SITIO SAO BENEDITO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "370",
        "Rua": "SITIO BRASILIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "371",
        "Rua": "SITIO ELISABETE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "372",
        "Rua": "SITIO YANASE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "373",
        "Rua": "FAZENDA SANTA GEMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "374",
        "Rua": "SITIO DAS PALMEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06 - B. BOM RETIRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "375",
        "Rua": "SITIO VENTANIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "376",
        "Rua": "SITIO SONHO VERDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "377",
        "Rua": "HARAS COAGATTA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "378",
        "Rua": "SITIO ALBA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "379",
        "Rua": "CHACARA MANE FREET",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "380",
        "Rua": "SITIO PINHEIRAL",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "381",
        "Rua": "SITIO SAO JOSE DOS NETOS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "382",
        "Rua": "SITIO SAO LUIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "383",
        "Rua": "SITIO SANTA CECILIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "384",
        "Rua": "SITIO SANTA FE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "385",
        "Rua": "SITIO CAMBUI",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "386",
        "Rua": "SITIO ITALIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "387",
        "Rua": "SITIO MURAYMA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "388",
        "Rua": "SITIO DAS VIDEIRAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "389",
        "Rua": "CHACARA CAMBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "390",
        "Rua": "SITIO SAO BENEDITO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "391",
        "Rua": "SITIO ELIAN",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "392",
        "Rua": "SITIO SAO LUIZ",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "393",
        "Rua": "SITIO SANTO ANTONIO",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "394",
        "Rua": "SITIO CASA NOSTRA",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "395",
        "Rua": "SITIO OURO VERDE",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "396",
        "Rua": "SITIO CINCO ESTRELAS",
        "Equipe": "ARCO-IRIS",
        "Micro": "06",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "397",
        "Rua": "CHACARA CLARINA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "398",
        "Rua": "CHACARA SUCEGO DO ZE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "399",
        "Rua": "CHACARA DO ODILON",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "400",
        "Rua": "SITIO DAS PENHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "401",
        "Rua": "SITIO SAO GERALDO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "402",
        "Rua": "FAZENDA VALLE DO SOL",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "403",
        "Rua": "SÍTIO IAIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "404",
        "Rua": "SITIO RAINHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "405",
        "Rua": "SITIO SANTA BARBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "406",
        "Rua": "SITIO SAO JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "407",
        "Rua": "FAZENDA MONÇOES",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "408",
        "Rua": "SITIO SANTA AMELIA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "409",
        "Rua": "SITIO SAO SEBASTIAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "410",
        "Rua": "SITIO NOSSA SENHORA DA PENHA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "411",
        "Rua": "SITIO DO JAPONES",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "412",
        "Rua": "SITIO BENEDETTE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - GRAMADO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "413",
        "Rua": "SITIO BOA ESPERANÇA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "414",
        "Rua": "FAZENDA SAO JOAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "415",
        "Rua": "SITIO DOS CARNEIROS",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "416",
        "Rua": "SITIO GIBIMBA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BAIRRO DA GLORIA",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "417",
        "Rua": "HARAS VILLA SAN JOSE",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "418",
        "Rua": "HARAS MABLUCK",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "419",
        "Rua": "HARAS PITASSABA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "420",
        "Rua": "HARAS CENTRO HIPICO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "421",
        "Rua": "SITIO SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "422",
        "Rua": "CHACARA SAMUARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "423",
        "Rua": "SITIO GRAMADO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "424",
        "Rua": "SITIO DOIS COQUEIROS",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "425",
        "Rua": "SÍTIO DANTA BARBARA",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "426",
        "Rua": "SITIO DO LIMAO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - TABARRO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "427",
        "Rua": "SITIO SAO PEDRO",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "428",
        "Rua": "SITIO NOSSA SENHORA DAS DORES",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "429",
        "Rua": "SITIO SEU NILSON",
        "Equipe": "ARCO-IRIS",
        "Micro": "07 - BARREIRO RICO",
        "Posto": "BOM RETIRO",
    },

    {
        "id": "430",
        "Rua": "JOSE AVANCINI",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "431",
        "Rua": "SAO PEDRO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "432",
        "Rua": "JOSE MANOEL ANTUNES",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "433",
        "Rua": "ALEXANDRE BAZZO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "434",
        "Rua": "JOAO AVANCINI",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "435",
        "Rua": "GINDA TOME BAZZO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "436",
        "Rua": "ARARITAGUABA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "437",
        "Rua": "JOAO PESSOA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "438",
        "Rua": "PEDRO FERNANDES DE CAMARGO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "439",
        "Rua": "MONTEIRO LOBATO",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "440",
        "Rua": "BENEDITO AUGUSTO DE OLIVEIRA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "441",
        "Rua": "OTHONI JOAQUIM DE SOUZA",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "442",
        "Rua": "GERALDO ESMÉDIO PIRES",
        "Equipe": "ROXA",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "443",
        "Rua": "JOAO PORTELA SOBRINHO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "444",
        "Rua": "MARECHAL DEODORO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "445",
        "Rua": "JUSTINO GOMIDE BUENO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "446",
        "Rua": "NEWTON PRADO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "447",
        "Rua": "OTONI JOAQUIM DE SOUZA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "448",
        "Rua": "TRAVESSA ALBERTO GERTH",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "449",
        "Rua": "ANTONIO MANCIO DE CAMARGO",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "450",
        "Rua": "LUIZ ALBERTO DE ARUDA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "451",
        "Rua": "JOSE MOTA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "452",
        "Rua": "ADEMAR DE BARROS",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "453",
        "Rua": "BENEDITO JOSE DIANA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "454",
        "Rua": "MILTON BISTAFA",
        "Equipe": "ROXA",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "455",
        "Rua": "JOSE MAURINO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "456",
        "Rua": "BELMIRA MORAES FERNANDES",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "457",
        "Rua": "JOAQUIM OLAVO DE CARVALHO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "458",
        "Rua": "RUI BARBOSA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "459",
        "Rua": "TRAVESSA TESTILDE HENRIQUE",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "460",
        "Rua": "PRAÇA EUGENIO MOTA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "461",
        "Rua": "NEWTON PRADO - 1 A 163",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "462",
        "Rua": "PRAÇA LAURO MAURINO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "463",
        "Rua": "DOMINGOS MAURINO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "464",
        "Rua": "BENEDITO LISBOA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "465",
        "Rua": "ALTINO ARANTES",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "466",
        "Rua": "PRAÇA CORONEL ESMEDIO",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "467",
        "Rua": "ANDRE ROCHA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "468",
        "Rua": "ADHEMAR DE BARROS - 436 A 596",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "469",
        "Rua": "JOSE BENEDITO NORONHA",
        "Equipe": "ROXA",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "470",
        "Rua": "LUIZA MINELLI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "471",
        "Rua": "VICENTE RAVAZIO",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "472",
        "Rua": "SILVINO NOBREGA DA SILVA",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "473",
        "Rua": "SALVADOR ARRUDA",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "474",
        "Rua": "VICENTE GUARINI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "475",
        "Rua": "CONEGO BELOTI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "476",
        "Rua": "JULIO PRESTES DE ALBUQUERQUE",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "477",
        "Rua": "CONSTANTINI GUARINI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "478",
        "Rua": "AV. ANTONIO PIRES DE ALMEIDA",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "479",
        "Rua": "LICIO MARCONDES DO AMARAL",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "480",
        "Rua": "BARAO DO RIO BRANCO",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "481",
        "Rua": "MIGUEI ELIAS ZAETI",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "482",
        "Rua": "PRINCESA ISABEL",
        "Equipe": "ROXA",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "483",
        "Rua": "SANTA CRUZ",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "484",
        "Rua": "DOUTOR ALVIM",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "485",
        "Rua": "ANTONIO MARTINS SAMPAIO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "486",
        "Rua": "ARCILIO BORGES",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "487",
        "Rua": "ADEMAR DE BARROS",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "488",
        "Rua": "ANTONIO PIRES DE AMEIDA",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "489",
        "Rua": "BANDEIRANTES",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "490",
        "Rua": "JOSE MARTINS BASTOS",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "491",
        "Rua": "JOAO TUANI",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "492",
        "Rua": "MARIO TUANI",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "493",
        "Rua": "PALMEIRAS",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "494",
        "Rua": "JOSE ANTONIO LEME",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "495",
        "Rua": "BARAO DO RIO BRANCO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "496",
        "Rua": "CUSTODIO SACRAMENTO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "497",
        "Rua": "BENEDITO STETNER",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "498",
        "Rua": "JOSE SACRAMENTO E SILVA",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "499",
        "Rua": "BRASIL",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "500",
        "Rua": "SABINO JOSE MELO",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "501",
        "Rua": "DRACO DE ALBUQUERQUE",
        "Equipe": "ROXA",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "502",
        "Rua": "CEZARIO CASTELUCCI",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "503",
        "Rua": "ARCILIO BORGES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "504",
        "Rua": "JOAQUIM AGOSTINHO TORRES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "505",
        "Rua": "CANDIDO MOTTA",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "505",
        "Rua": "ANTONIO MAGNATTI",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "506",
        "Rua": "PRAÇA DUQUE DE CAXIAS",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "507",
        "Rua": "JOSE BONIFÁCIO",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "508",
        "Rua": "PADRE LIDRO",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "509",
        "Rua": "TRISTAO PIRES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "510",
        "Rua": "ANTONIO PIRES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "511",
        "Rua": "JOAO ANGELIERI",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "512",
        "Rua": "FLODOALDO BUENO DE CAMARGO",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "513",
        "Rua": "GASTAO VIDIGAL",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "514",
        "Rua": "JOAO MOREIRA SALLES",
        "Equipe": "ROXA",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "515",
        "Rua": "FRANCISCO GOMES TOLEDO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "516",
        "Rua": "RUTH PEREIRA TUANI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "517",
        "Rua": "ASSALIM ZAURO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "518",
        "Rua": "ANGELINA DE JESUS DIAS DE TOLEDO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "519",
        "Rua": "ANTONIO GONZAGA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "520",
        "Rua": "LAZARO DE CAMPOS",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "521",
        "Rua": "MARIA DA GLORIA VIEIRA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "522",
        "Rua": "JARBAS SEABRA LEAL",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "523",
        "Rua": "HOMERO AMBRÓSIO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "01",
        "Posto": "PATUCCI",
    },

    {
        "id": "524",
        "Rua": "AVENIDA LICIO MARCONDES DO AMARAL",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "525",
        "Rua": "CARLOS GOMES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "526",
        "Rua": "BOA VISTA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "527",
        "Rua": "SANTA INES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "528",
        "Rua": "HENRIQUE DIAS",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "02",
        "Posto": "PATUCCI",
    },

    {
        "id": "529",
        "Rua": "VIOLETA DE ARRUDA MELO BRUSCO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "530",
        "Rua": "EMILIO COLI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "531",
        "Rua": "PRIMO BENVEGNU",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "532",
        "Rua": "PADRE BENTO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "533",
        "Rua": "ANTENOR FERRAZ DE OLIVEIRA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "534",
        "Rua": "NOVE DE JULHO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "535",
        "Rua": "DOMINGOS JORGE VELHO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "536",
        "Rua": "BARTOLOMEU BUENO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "537",
        "Rua": "ANTONIO RAPOSO TAVARES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "03",
        "Posto": "PATUCCI",
    },

    {
        "id": "538",
        "Rua": "FERNAO DIAS - ATÉ 560",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "539",
        "Rua": "LOURENÇO TAQUES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "540",
        "Rua": "PASCOAL MOREIRA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "541",
        "Rua": "BORBA GATO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "542",
        "Rua": "BARTOLOMEU BUENO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "543",
        "Rua": "ABNER DE CAMARGO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "544",
        "Rua": "JOAO DE ALMEIDA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "545",
        "Rua": "LURDES XAVIER MARTELINI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "04",
        "Posto": "PATUCCI",
    },

    {
        "id": "546",
        "Rua": "FERNANDO STECCA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "547",
        "Rua": "FELIPE FELIX",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "548",
        "Rua": "MARCELINO ALVES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "549",
        "Rua": "THOMAZ CORTEZ",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "550",
        "Rua": "OLYNTHO BAPTISTELA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "05",
        "Posto": "PATUCCI",
    },

    {
        "id": "551",
        "Rua": "ANTONIO CARLOS MARCOLINO POLAZ",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "552",
        "Rua": "FREDERICO PALMIERI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "553",
        "Rua": "BRAXISTER DE CAMARGO",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "554",
        "Rua": "JOEL BRIENZA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "555",
        "Rua": "ALFEU TROMBINI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "556",
        "Rua": "EVAIR DE OLIVEIRA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "557",
        "Rua": "ANTONIO BONINI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "558",
        "Rua": "PEDRO MIRANDA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "559",
        "Rua": "OLYMPIO FRANCISCO DE MORAES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "560",
        "Rua": "OTACILIO RODRIGUES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "06",
        "Posto": "PATUCCI",
    },

    {
        "id": "561",
        "Rua": "MARIA JOSE SOARES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "562",
        "Rua": "LAERTE CARLOS",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "563",
        "Rua": "PEDRO PAULO GHIRALDI",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "564",
        "Rua": "BENEDITO ANTUNES SOARES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "565",
        "Rua": "VALDIR DE LARA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "566",
        "Rua": "IBRAIM PAES DA MOTA",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "567",
        "Rua": "MITRE FIUZA AYRES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
    },

    {
        "id": "568",
        "Rua": "CLOTILDE RUSSO AYRES",
        "Equipe": "LARANJA (VILA ANGELICA)",
        "Micro": "07",
        "Posto": "PATUCCI",
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
        "id": "571",
        "Rua": "ALFREDO ROGADO",
        "Equipe": "PRATA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
    
    {
        "id": "572",
        "Rua": "ALAN KARDEC",
        "Equipe": "PRATA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
    
    {
        "id": "573",
        "Rua": "ANGELO FUSTAINO",
        "Equipe": "PRATA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
    
    {
        "id": "574",
        "Rua": "APARICIO PIRES",
        "Equipe": "PRATA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
    
    {
        "id": "575",
        "Rua": "AURELIA VERONEZE GUTIERREZ",
        "Equipe": "PRATA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
    
    {
        "id": "576",
        "Rua": "BENEDITO APARECIDO MANFRINATI",
        "Equipe": "PRATA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
    
    {
        "id": "577",
        "Rua": "BOM JESUS",
        "Equipe": "PRATA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
    
    {
        "id": "578",
        "Rua": "",
        "Equipe": "PRATA",
        "Micro": "",
        "Posto": "POPULAR",
    },
    
    {
        "id": "579",
        "Rua": "BOM PASTOR",
        "Equipe": "PRATA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
    
    {
        "id": "580",
        "Rua": "DANIEL DE CAMARGO TABORDA (4-484)",
        "Equipe": "PRATA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
    
    {
        "id": "581",
        "Rua": "HANS REDER",
        "Equipe": "PRATA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
    
    {
        "id": "582",
        "Rua": "JOAO DIANA SOBRINHO 348 EM DIANTE",
        "Equipe": "PRATA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
    
    {
        "id": "583",
        "Rua": "MAESTRO MANOEL JOSE DE CACALAZANS",
        "Equipe": "PRATA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
    
    {
        "id": "584",
        "Rua": "MAHATMA GANDHI",
        "Equipe": "PRATA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
    
    {
        "id": "585",
        "Rua": "MARCO AURELIO BATISTELA",
        "Equipe": "PRATA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
    
    {
        "id": "586",
        "Rua": "MARIA EUGENIA PIMENTA DIANA (137-303)",
        "Equipe": "PRATA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
    
    {
        "id": "587",
        "Rua": "MARIO PIRES DE ALMEIDA",
        "Equipe": "PRATA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
    
    {
        "id": "588",
        "Rua": "OLIVIO TOME",
        "Equipe": "PRATA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
    
    {
        "id": "589",
        "Rua": "OSVALDO NOVAES DE CARVALHO (125-309)",
        "Equipe": "PRATA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
    
    {
        "id": "590",
        "Rua": "OTONIEL RODRIGUES",
        "Equipe": "PRATA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
    
    {
        "id": "591",
        "Rua": "PADRE JOSE DE ANCHIETA ",
        "Equipe": "PRATA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
    
    {
        "id": "592",
        "Rua": "PLINIO MARTINS SIQUEIRA",
        "Equipe": "PRATA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
    
    {
        "id": "593",
        "Rua": "REI DAVI",
        "Equipe": "PRATA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
    
    {
        "id": "594",
        "Rua": "SILVIO BOSCOLO",
        "Equipe": "PRATA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
    
    {
        "id": "595",
        "Rua": "SILVIO PELEGRINE - (156-302)",
        "Equipe": "PRATA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
    
    {
        "id": "596",
        "Rua": "SUZETE TOME ALCALA",
        "Equipe": "PRATA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
    
    
    {
        "id": "597",
        "Rua": "VALTER ALBIEIRO",
        "Equipe": "PRATA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
        
    {
        "id": "598",
        "Rua": "WALTER CASTELUCCI",
        "Equipe": "PRATA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
        
    {
        "id": "599",
        "Rua": "PERES VENTURA",
        "Equipe": "PRATA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
    
    {
        "id": "600",
        "Rua": "AGEU AUGUSTO DA SILVA",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
     
    {
        "id": "601",
        "Rua": "ALZIRA PREVITALI",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "602",
        "Rua": "ANGELO GASTARDELLO",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "603",
        "Rua": "ANGELO GIOVANI MENEGON",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "604",
        "Rua": "ANTONIO GIBIM",
        "Equipe": "AMARELA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
           
    {
        "id": "605",
        "Rua": "ARMANDO SALES DE OLIVEIRA (653 A 1070)",
        "Equipe": "AMARELA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
           
    {
        "id": "606",
        "Rua": "AGOSTINHO ZARDETO",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "607",
        "Rua": "AURORA MACHADO GUIMARAES",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "608",
        "Rua": "AVELINO ALVES DE OLIVEIRA",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "609",
        "Rua": "BENEDITA DE ALMEIDA LEAL",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "610",
        "Rua": "DARIO MARTELI",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "611",
        "Rua": "FELICIO CASTELUCCI (131 EM DIANTE)",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "612",
        "Rua": "GESSIA ODETE MORAES LISBOA",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "613",
        "Rua": "HUMBERTO MARTELLI (134 EM DIANTE)",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "614",
        "Rua": "ITAMAR SEGUNDO ALVES DE SANTANA (29 A 181)",
        "Equipe": "AMARELA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
           
    {
        "id": "615",
        "Rua": "JOAO DIANA SOBRINHO (15 A 257)",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "616",
        "Rua": "JOAO MARINONIO DE CAMARGO (157 EM DIANTE)",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "617",
        "Rua": "JOAO VICENTE FERREIRA",
        "Equipe": "AMARELA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
           
    {
        "id": "618",
        "Rua": "JOSE CAETANO JESUS (13, 17, 39)",
        "Equipe": "AMARELA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
           
    {
        "id": "619",
        "Rua": "JOSE MARTINS TELES (05 A 835)",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "620",
        "Rua": "JULIEN FOUQUE (20 A 505)",
        "Equipe": "AMARELA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
           
    {
        "id": "621",
        "Rua": "JULIO SOARES DIEL",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "622",
        "Rua": "LAZARO DIAS SANTOS",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "623",
        "Rua": "LUIZ CARLOS LISBOA (15 A 90)",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "624",
        "Rua": "LUZIA DANIEL GHILBERT (47 A 77)",
        "Equipe": "AMARELA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
           
    {
        "id": "625",
        "Rua": "MADRE SERAFINA (164 A 420)",
        "Equipe": "AMARELA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
           
    {
        "id": "626",
        "Rua": "MARIA EUGENIA PIMENTA DIANA (8-88)",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "627",
        "Rua": "MARIA MARGARIDA PASCOA",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "628",
        "Rua": "MONSENHOR PIRES (318 A 604)",
        "Equipe": "AMARELA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
           
    {
        "id": "629",
        "Rua": "OSVALDO NOVAES DE CARVALHO (ATÉ 56)",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "630",
        "Rua": "OTACILIO VALINI",
        "Equipe": "AMARELA",
        "Micro": "",
        "Posto": "POPULAR",
    },
           
    {
        "id": "631",
        "Rua": "OTONIEL MOTTA (41 A 322)",
        "Equipe": "AMARELA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
           
    {
        "id": "632",
        "Rua": "PADRE ALEXANDRE HOLDEAU (125 A 445)",
        "Equipe": "AMARELA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
           
    {
        "id": "633",
        "Rua": "RODOLFO MOTTA",
        "Equipe": "AMARELA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
           
    {
        "id": "634",
        "Rua": "ROSA GUARINI MARTELLI",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "635",
        "Rua": "SAID NEIFE",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "636",
        "Rua": "SILVIA MARTELLI",
        "Equipe": "AMARELA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
           
    {
        "id": "637",
        "Rua": "SILVIO PELEGRINE (7 A 87)",
        "Equipe": "AMARELA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
           
    {
        "id": "638",
        "Rua": "SUZANA FRANCO ROCCO",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "639",
        "Rua": "VALDEREZ PIRES (98, 102, 112, 115, 120, 171)",
        "Equipe": "AMARELA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
           
    {
        "id": "640",
        "Rua": "VILMA MARIA BOSCOLO",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "641",
        "Rua": "VIRGILINO DE OLIVEIRA SANTOS",
        "Equipe": "AMARELA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
           
    {
        "id": "642",
        "Rua": "ADA CALGARO CAVALANTE",
        "Equipe": "ROSA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
          
    {
        "id": "643",
        "Rua": "ALZIRO CARLOS",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "644",
        "Rua": "ANTONIO DARIO",
        "Equipe": "ROSA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                
    {
        "id": "645",
        "Rua": "BENEDITO PRESTES SOUZA",
        "Equipe": "ROSA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
                
    {
        "id": "646",
        "Rua": "DOUTOR CELIO PRADO",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "647",
        "Rua": "CLARICE SANNA SERRALHEIRO",
        "Equipe": "ROSA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                
    {
        "id": "648",
        "Rua": "CLEITON BAZZO CUCHERA",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "649",
        "Rua": "DANIEL DE CAMARGO TABORDA (485 EM DIANTE)",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "650",
        "Rua": "DANIEL DA SILVA BRAGA",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "651",
        "Rua": "DANTE CAREZIA",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "652",
        "Rua": "EDGAR MORAES",
        "Equipe": "ROSA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                
    {
        "id": "653",
        "Rua": "FELIPE MANOEL DE CAMPOS",
        "Equipe": "ROSA",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                
    {
        "id": "654",
        "Rua": "FLAVIA SAMPAIO BELLO",
        "Equipe": "ROSA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                
    {
        "id": "655",
        "Rua": "FRANCISCO MIGUEL MACEDO",
        "Equipe": "ROSA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
                
    {
        "id": "656",
        "Rua": "IRENE SEGATO",
        "Equipe": "ROSA",
        "Micro": "JOAO BRASILIO DA SILVA",
        "Posto": "POPULAR",
    },
                
    {
        "id": "657",
        "Rua": "JOAO GASTARDELI",
        "Equipe": "ROSA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                
    {
        "id": "658",
        "Rua": "JOSE BARBOSA ",
        "Equipe": "ROSA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
                
    {
        "id": "659",
        "Rua": "JOSE MARTINS TELES (1135 A 1143)",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "660",
        "Rua": "JOSE ROBERTO BATISTELA",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "661",
        "Rua": "LAURO GALVAO",
        "Equipe": "ROSA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                
    {
        "id": "662",
        "Rua": "LAURA STEINER DE CARVALHO",
        "Equipe": "ROSA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                
    {
        "id": "663",
        "Rua": "LUIS TEMPESTA",
        "Equipe": "ROSA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                
    {
        "id": "664",
        "Rua": "MARIO CAMILO FILHO",
        "Equipe": "ROSA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
                
    {
        "id": "665",
        "Rua": "MARIO COVAS (1985 A 2945)",
        "Equipe": "ROSA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                
    {
        "id": "666",
        "Rua": "NORBERTO COELHO DE OLIVEIRA",
        "Equipe": "ROSA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                
    {
        "id": "667",
        "Rua": "OCIREMA FERNANDES STETNER",
        "Equipe": "ROSA",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                
    {
        "id": "668",
        "Rua": "OLGA BRUGNEROTTO SGARIBOLDI",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "669",
        "Rua": "PAULO DE OLIVEIRA TAUHYL",
        "Equipe": "ROSA",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                
    {
        "id": "670",
        "Rua": "PEDRO SGARIBOLDI",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "671",
        "Rua": "PLINIO MARTINS TELES",
        "Equipe": "ROSA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                
    {
        "id": "672",
        "Rua": "ROBERVAL CAMARGO DE MORAES",
        "Equipe": "ROSA",
        "Micro": "1",
        "Posto": "POPULAR",
    },
                
    {
        "id": "673",
        "Rua": "ROMEU CASTELUCCI",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "674",
        "Rua": "SANTA LUCIA MAGOGA",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "675",
        "Rua": "SANTO SGARIBOLDI",
        "Equipe": "ROSA",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                
    {
        "id": "676",
        "Rua": "REVERENDO SILES BACARO",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "677",
        "Rua": "ULISSES ALVES MACHADO",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "678",
        "Rua": "VALDEMAR VERONEZE",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "679",
        "Rua": "VERGINIO ANGELIERE",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "680",
        "Rua": "ALFREDO SALEM",
        "Equipe": "ROSA",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                
    {
        "id": "681",
        "Rua": "VICTORIO MARTELETTO",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "682",
        "Rua": "MARIA DE LOURDES RIBEIRO DA SILVA SERAFIM",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "683",
        "Rua": "JOSE OLIVEIRA DE SOUZA",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                
    {
        "id": "684",
        "Rua": "TANCREDO DE ALMEIDA NEVES",
        "Equipe": "ROSA",
        "Micro": "",
        "Posto": "POPULAR",
    },
                     
    {
        "id": "685",
        "Rua": "ADOLFO FERRARI",
        "Equipe": "OURO",
        "Micro": "",
        "Posto": "POPULAR",
    },
                          
    {
        "id": "686",
        "Rua": "AMADEU MARTELLI",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "687",
        "Rua": "ANTONIO BELLO",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "688",
        "Rua": "ANTONIO LEITE ALMEIDA",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "689",
        "Rua": "ARMANDO RAMOS (38 a 214)",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "690",
        "Rua": "ARMANDO SALES DE OLIVEIRA (174-585)",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "691",
        "Rua": "ARMANDO SALES DE OLIVEIRA (12-169)",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "692",
        "Rua": "ATILIO COLI",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "693",
        "Rua": "BENEDITO PIRES DE ARRUDA",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "694",
        "Rua": "BENEDITO DE TOLEDO VIEGAS / VIEIRA",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "695",
        "Rua": "BENEDITO VAZ CARDOSO",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "696",
        "Rua": "BOITUVA",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "697",
        "Rua": "CABREUVA",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "698",
        "Rua": "CANTIDIO / CANDIDO DE OLIVEIRA",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "699",
        "Rua": "CERQUILHO",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "700",
        "Rua": "EVARISTO BAPTISTELLA",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "701",
        "Rua": "FELICIO CASTELUCCI (ATÉ 130)",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "702",
        "Rua": "GENESIO RODRIGUES",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "703",
        "Rua": "HUMBERTO MARTELLI (ATÉ 120)",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "704",
        "Rua": "INDAIATUBA",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "705",
        "Rua": "ITU",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "706",
        "Rua": "JOAO BATISTA DE CAMPOS",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "707",
        "Rua": "JOAO MARINONIO DE CAMARGO (ATÉ 140)",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "708",
        "Rua": "JOAO RODRIGUES DA SILVA",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "709",
        "Rua": "JOAQUIM PIRES ALMEIDA",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "710",
        "Rua": "JOSE GUERINI",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "711",
        "Rua": "JOSE MARCELINO ANTUNES",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "712",
        "Rua": "JOSE TEIXEIRA DA FONSECA",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "713",
        "Rua": "LUIZ ANTONIO VIEIRA",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "714",
        "Rua": "LUIS CARLOS RINCK",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "715",
        "Rua": "LUIZ MARTELI",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "716",
        "Rua": "MADRE SERAFINA (ATÉ 163)",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "717",
        "Rua": "MARIA MARGARIDA COSSONICHE",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "718",
        "Rua": "MONSENHOR PIRES",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "719",
        "Rua": "NATALIO TAUHYL",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "720",
        "Rua": "OLAVO ASSUMPÇAO FLEURY (ATÉ 96)",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                        
    {
        "id": "721",
        "Rua": "PADRE ALEXANDRE HORDEAU (ATÉ 39)",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                                 
    {
        "id": "722",
        "Rua": "PASCOA BONINI GUERINI",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "723",
        "Rua": "PEDRO PAULO DE OLIVEIRA",
        "Equipe": "OURO",
        "Micro": "5",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "724",
        "Rua": "PIRAPORA",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "725",
        "Rua": "ROQUE PLINIO DE CARVALHO",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "726",
        "Rua": "SALTO",
        "Equipe": "OURO",
        "Micro": "3",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "727",
        "Rua": "SANTA ROSA",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "728",
        "Rua": "SOROCABA",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "729",
        "Rua": "TATUI",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "730",
        "Rua": "TIETE",
        "Equipe": "OURO",
        "Micro": "4",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "731",
        "Rua": "ULISSES CORNELIO VITORINO",
        "Equipe": "OURO",
        "Micro": "6",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "732",
        "Rua": "VITORIO BELO",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "733",
        "Rua": "GENESIO AZOLINE",
        "Equipe": "OURO",
        "Micro": "2",
        "Posto": "POPULAR",
    },
                                  
    {
        "id": "734",
        "Rua": "LUIZ CARLOS LISBOA (91 EM DIANTE)",
        "Equipe": "OURO",
        "Micro": "",
        "Posto": "POPULAR",
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
        "id": "",
        "Rua": "",
        "Equipe": "BRONZE",
        "Micro": "",
        "Posto": "BAMBU",
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
	    case 'LARANJA (VILA ANGELICA)':
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
        case 'AZUL':
            return 'class="Equipe azul"';
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
        <td><span `+ getEquipe(item.Equipe) + `>•</span> ${item.Equipe}</td>                        
        <td>${item.Micro}</td>
        <td>${item.Posto}</td>
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
