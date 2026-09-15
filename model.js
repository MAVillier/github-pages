window.ATLES_MODEL={
  "schemaVersion": 1,
  "updated": "2026-09-15",
  "title": "Actors i processos de referència",
  "intro": "Una mateixa lectura per entendre la proposta i situar cada equip. Les responsabilitats concretes de cada pilot es contrastaran amb el CTTI.",
  "assignmentNote": "Encaix funcional proposat per Atos, basat en les fonts. No és un organigrama ni una nova assignació formal de competències.",
  "states": {
    "documentat": "Base documentada",
    "model_previst": "Model de servei previst",
    "proposta": "Proposta d’Atos"
  },
  "sourceNote": "La memòria descriu activitat de 2025; els models de servei indiquen funcions previstes i no acrediten totes les implantacions actuals.",
  "roles": [
    {
      "id": "govern_ctti",
      "name": "CTTI · govern i decisions",
      "group": "Decidir i validar",
      "role": "Fixa les directrius i designa qui aprova criteris, excepcions i canvis d’abast.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 10",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "funcional",
      "name": "Responsable funcional",
      "group": "Decidir i validar",
      "role": "Defineix el resultat del procés, la criticitat i els moments sensibles; valida el resultat funcional.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26",
          "state": "documentat"
        },
        {
          "id": "CTTI_MQS",
          "locator": "Validació i manual d’explotació",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "area_tic",
      "name": "Àrea TIC / àmbit",
      "group": "Coordinar el servei",
      "role": "Relaciona les necessitats del departament amb el seguiment del servei i la comunicació d’afectacions.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 25–27",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 5",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "gestio_servei",
      "name": "Gestió del servei i de l’entrega",
      "group": "Coordinar el servei",
      "role": "Connecta compromisos, equips i acceptació operativa, segons el circuit de cada servei.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 112–113",
          "state": "documentat"
        },
        {
          "id": "CTTI_MQS",
          "locator": "Acceptació operativa",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "oficina_o11y",
      "name": "Oficina d’Observabilitat",
      "group": "Decidir i validar",
      "role": "Intervé en estàndards, freqüències, excepcions i activació d’APM segons el llibre blanc. No s’equipara automàticament al prestador d’eines.",
      "sources": [
        {
          "id": "CTTI_LB2026",
          "locator": "§5.3 i §8",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 11 i 13",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "cdc",
      "name": "Centre de Control",
      "group": "Coordinar el servei",
      "role": "El model 132 li assigna el lideratge d’incidents d’alt impacte i la coordinació de problemes. Els equips de cada solució executen les intervencions tècniques.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 3–5, 10 i 18",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "eines_o11y",
      "name": "Gestió d’eines d’observabilitat",
      "group": "Operar i resoldre",
      "role": "Desenvolupa integracions i administra les eines del seu abast; resol o escala al suport de producte quan correspon.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 3–6 i 12–13",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "operadors",
      "name": "Equips de les solucions observades",
      "group": "Operar i resoldre",
      "role": "Instrumenten, diagnostiquen i intervenen sobre aplicacions, dades, CPD, cloud, xarxa, comunicacions i lloc de treball dins del seu àmbit.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5 i 10",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "suport_producte",
      "name": "Integradors i fabricants",
      "group": "Operar i resoldre",
      "role": "Aporten suport especialitzat i manteniment segons component, amb traspàs, acceptació i prova de recuperació.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 12–13",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ANS133",
          "locator": "CO-INC03/04, p. 18–19",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "sau",
      "name": "Atenció i suport a l’usuari",
      "group": "Operar i resoldre",
      "role": "Rep afectacions i peticions, aporta context d’ús i comunica pels canals previstos.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 27–29",
          "state": "documentat"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "arquitectura",
      "name": "Arquitectura i Integració",
      "group": "Aportar criteri transversal",
      "role": "Relaciona dependències, disseny i cicle de vida amb les plataformes i els patrons corporatius.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 39 i 46",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "qualitat",
      "name": "Qualitat",
      "group": "Aportar criteri transversal",
      "role": "Aporta criteris, proves i suport a diagnòstic i millora segons procediment. No dirigeix per defecte tots els problemes.",
      "sources": [
        {
          "id": "CTTI_MQS",
          "locator": "Proves i operació",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 18",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "dada_ia",
      "name": "Govern de dades i IA",
      "group": "Aportar criteri transversal",
      "role": "Encaixa els usos de dades i agents amb les capacitats i el govern corporatius: OGD, PTD i serveis transversals d’IA segons funció.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 37 i 39–42",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 7–8",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "propietari_dada",
      "name": "Responsable de la dada",
      "group": "Decidir i validar",
      "role": "Aporta la definició, la qualitat esperada i les condicions d’ús del conjunt de dades que es vol mesurar o compartir.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 7–8",
          "state": "model_previst"
        },
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 42",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "seguretat",
      "name": "Seguretat CTTI, Agència i SOC",
      "group": "Aportar criteri transversal",
      "role": "Acorden l’intercanvi i la resposta de seguretat segons competències, permisos i necessitat de cada cas.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 47 i 62",
          "state": "documentat"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "direccio",
      "name": "Direcció i seguiment econòmic",
      "group": "Decidir i validar",
      "role": "Decideixen prioritats i recursos amb indicadors reproduïbles i el suport de les capacitats FinOps aplicables.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 40, 47 i 113",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 22–24",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "externs",
      "name": "Organismes i serveis externs",
      "group": "Dependències amb govern propi",
      "role": "Aporten serveis, evidències i punts de contacte dins d’un abast acordat; cal mostrar el límit de visibilitat i actuació del CTTI.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 27 i 80–82",
          "state": "documentat"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    }
  ],
  "processes": [
    {
      "id": "govern_mesura",
      "name": "Governar la mesura",
      "description": "Acordar què representa servei prestat, com es mesura i qui valida els canvis."
    },
    {
      "id": "alta_canvi",
      "name": "Donar d’alta i canviar amb garanties",
      "description": "Passar del disseny a una operació preparada, amb proves, excepcions i mantenidor."
    },
    {
      "id": "telemetria",
      "name": "Recollir i conservar dades fiables",
      "description": "Relacionar fonts, ingesta, retenció i consulta amb responsables i permisos."
    },
    {
      "id": "qualitat_cobertura",
      "name": "Comprovar cobertura i corregir mancances",
      "description": "Distingir una falta de dades d’una fallada del servei i tancar el deute amb proves."
    },
    {
      "id": "incidents",
      "name": "Coordinar la recuperació del servei",
      "description": "Conduir el cas, assignar cada intervenció i demostrar la recuperació abans del tancament."
    },
    {
      "id": "problemes",
      "name": "Investigar causes i evitar recurrències",
      "description": "Vincular el problema amb l’incident, les accions correctores i la prova de tancament."
    },
    {
      "id": "escalats",
      "name": "Traspassar treball i confirmar-ne l’acceptació",
      "description": "Mantenir context, cobertura horària i responsable fins que el següent equip assumeix la tasca."
    },
    {
      "id": "coneixement",
      "name": "Mantenir coneixement i capacitat d’ús",
      "description": "Reutilitzar fonts vigents i comprovar que cada rol pot resoldre la seva part del cas."
    },
    {
      "id": "agents",
      "name": "Governar i observar els agents",
      "description": "Delimitar funcions, permisos, versions, resultat i retorn al procediment humà."
    },
    {
      "id": "autoservei",
      "name": "Atendre peticions repetibles",
      "description": "Executar operacions aprovades des del canal corresponent i comprovar-ne el resultat."
    },
    {
      "id": "resultat_servei",
      "name": "Mesurar resultat i experiència",
      "description": "Relacionar procés públic, moments crítics, qualitat percebuda i dependències tècniques."
    },
    {
      "id": "seguiment_valor",
      "name": "Explicar el servei i prioritzar millores",
      "description": "Publicar dades reproduïbles i contrastar compromisos, cost i benefici net."
    },
    {
      "id": "dades_accessos",
      "name": "Compartir dades amb control",
      "description": "Validar finalitat, destinataris, accés i detall abans de compartir o publicar."
    },
    {
      "id": "reversibilitat",
      "name": "Transferir sense perdre la capacitat d’operar",
      "description": "Provar que un equip receptor pot reconstruir les funcions acordades."
    },
    {
      "id": "exposicio",
      "name": "Coordinar el context de seguretat",
      "description": "Relacionar exposició i controls amb els serveis, respectant el circuit de ciberseguretat."
    },
    {
      "id": "comunicacio",
      "name": "Comunicar l’estat segons el destinatari",
      "description": "Confirmar què funciona, què està afectat i qui valida cada missatge."
    }
  ],
  "sources": [
    {
      "id": "CTTI_MEM2025",
      "title": "Memòria CTTI 2025",
      "date": "2026-07",
      "url": "",
      "kind": "Memòria institucional",
      "state": "documentat",
      "note": "Activitat de 2025. Es distingeixen implantacions, pilots i previsions; no acredita cobertura general."
    },
    {
      "id": "CTTI_LB2026",
      "title": "Llibre Blanc d’Observabilitat · agost de 2026",
      "date": "2026-08",
      "url": "",
      "kind": "Documentació CTTI aportada",
      "state": "documentat",
      "note": "Marc de mesura i funcions concretes de l’Oficina d’Observabilitat; la configuració real es contrasta per servei."
    },
    {
      "id": "CTTI_POL2026",
      "title": "Estàndards i polítiques d’observabilitat",
      "date": "2026",
      "url": "https://canigo.ctti.gencat.cat/plataformes/observabilitat/Informacio_general/estandards/",
      "kind": "Marc corporatiu",
      "state": "documentat",
      "note": "Cinc famílies oficials. Els deu àmbits de l’Atles serveixen per explorar cobertura i no substitueixen aquesta classificació."
    },
    {
      "id": "CTTI_T132",
      "title": "Centre de Control · abast tècnic del servei 132",
      "date": "2026",
      "url": "",
      "kind": "Model de servei documentat",
      "state": "model_previst",
      "note": "Lideratge i coordinació dins l’abast definit. Els requisits no acrediten implantació actual de tot el model."
    },
    {
      "id": "CTTI_I132",
      "title": "Centre de Control · calendari previst del servei 132",
      "date": "2026",
      "url": "",
      "kind": "Document de servei aportat",
      "state": "model_previst",
      "note": "La invitació 132, versió catalana v2, p. 9, situa l’execució requerida a partir de 2027."
    },
    {
      "id": "CTTI_T133",
      "title": "Gestió d’eines d’observabilitat · abast tècnic del servei 133",
      "date": "2026",
      "url": "",
      "kind": "Model de servei documentat",
      "state": "model_previst",
      "note": "Projectes i administració d’eines. No atribueix automàticament al prestador totes les decisions corporatives d’observabilitat."
    },
    {
      "id": "CTTI_ANS132",
      "title": "Centre de Control · definicions de seguiment i ANS",
      "date": "2026",
      "url": "",
      "kind": "Model de mesura documentat",
      "state": "model_previst",
      "note": "Distingir temps d’informe, resolució i seguiment. La proposta Atos no modifica fórmules ni llindars d’ANS."
    },
    {
      "id": "CTTI_ANS133",
      "title": "Eines d’observabilitat · definicions de seguiment i ANS",
      "date": "2026",
      "url": "",
      "kind": "Model de mesura documentat",
      "state": "model_previst",
      "note": "Diferencia intervenció de l’adjudicatari i del mantenidor; les definicions es validen abans d’automatitzar el càlcul."
    },
    {
      "id": "CTTI_ESC2026",
      "title": "Matriu d’escalats de proveïdors · 8 de maig de 2026",
      "date": "2026-05-08",
      "url": "",
      "kind": "Referència operativa aportada",
      "state": "documentat",
      "note": "Base per relacionar serveis, equips i rutes. Els contactes no es publiquen; vigència i responsabilitats es contrasten per servei."
    },
    {
      "id": "CTTI_AUDIENCES",
      "title": "Plataforma corporativa d’observabilitat · destinataris",
      "date": "",
      "url": "https://canigo.ctti.gencat.cat/plataformes/observabilitat/Informacio_general/plat_obs_corp/",
      "kind": "Documentació oficial",
      "state": "documentat",
      "note": "Proveïdors, Àmbits, Centre de Control i Direcció, amb necessitats i detall diferents."
    },
    {
      "id": "CTTI_MQS",
      "title": "Model de Qualitat de Solucions · manual d’explotació",
      "date": "",
      "url": "https://qualitat.solucions.gencat.cat/procediments/manual_explotacio/",
      "kind": "Procediment corporatiu",
      "state": "documentat",
      "note": "La validació funcional i l’acceptació operativa tenen participants diferents; s’aplica el circuit que correspongui."
    },
    {
      "id": "CTTI_PTD",
      "title": "PTD · serveis transversals d’analítica avançada i IA",
      "date": "",
      "url": "https://canigo.ctti.gencat.cat/plataformes/ptd/5.-Serveis-Transversals-dAnal%C3%ADtica-avan%C3%A7ada-i-IA/",
      "kind": "Documentació oficial",
      "state": "documentat",
      "note": "Capacitats corporatives per aprofitar. La monitorització amb Neuraltrust hi consta com a pròxima disponibilitat, no com a desplegament acreditat."
    }
  ],
  "cards": [
    {
      "id": "A1",
      "processId": "govern_mesura",
      "relatedProcessIds": [],
      "coordinator": [
        "oficina_o11y"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "oficina_o11y",
        "funcional",
        "propietari_dada"
      ],
      "assignmentState": "proposta",
      "evidence": "Contracte versionat, mostres conformes i errors atribuïts a la font.",
      "baseCtti": "El llibre blanc ja defineix mètriques i paquets. L’Oficina intervé en criteris i excepcions.",
      "contribution": "Fer comprovables els identificadors, les unitats i el significat, separant responsable funcional i operador tècnic.",
      "sources": [
        {
          "id": "CTTI_LB2026",
          "locator": "§5.3 i §8",
          "state": "documentat"
        },
        {
          "id": "CTTI_POL2026",
          "locator": "Famílies, eixos i paquets de mesura",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 7–11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "A2",
      "processId": "telemetria",
      "relatedProcessIds": [],
      "coordinator": [
        "eines_o11y"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "suport_producte"
      ],
      "validators": [
        "oficina_o11y",
        "arquitectura",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Comptadors conciliats d’entrada, cua, sortida i pèrdua per tram.",
      "baseCtti": "Talaia, Montic, AppDynamics i sondes formen part de la base descrita. La memòria recull pilots AWS/Azure → Talaia.",
      "contribution": "Connectar fonts i destins compatibles amb responsabilitat per tram i pèrdues visibles.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 6 i 12–13",
          "state": "model_previst"
        },
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 46",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "A3",
      "processId": "telemetria",
      "relatedProcessIds": [],
      "coordinator": [
        "oficina_o11y"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "propietari_dada",
        "gestio_servei",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Una mostra de cada capa es recupera amb context; purgues i excepcions queden registrades.",
      "baseCtti": "El llibre blanc ja concreta retencions per a algunes mètriques. No fixa per si sol totes les decisions de cada conjunt.",
      "contribution": "Automatitzar el cicle de vida segons ús, amb excepció validada i prova real de recuperació.",
      "sources": [
        {
          "id": "CTTI_LB2026",
          "locator": "Retenció i catàleg de mètriques",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 5–6",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "A4",
      "processId": "alta_canvi",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "oficina_o11y",
        "arquitectura",
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Versió revisada, proves superades i reconstrucció en un entorn net.",
      "baseCtti": "SIC/SIC+ i la integració amb Talaia ja aporten un camí de desplegament; el 133 preveu traspàs de projecte a administració.",
      "contribution": "Ampliar aquest camí amb proves de configuració, control de divergències, excepcions i reversió.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 46",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 3–6",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "A5",
      "processId": "alta_canvi",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "operadors",
        "eines_o11y"
      ],
      "validators": [
        "funcional",
        "oficina_o11y",
        "arquitectura"
      ],
      "assignmentState": "proposta",
      "evidence": "Alta amb identitat, dependències, paquet de mesura, recorregut provat i ruta d’escalat.",
      "baseCtti": "SIC+/Talaia, els circuits d’alta i el llibre blanc són el punt de partida; l’activació d’APM segueix el circuit de l’Oficina.",
      "contribution": "Afegir una comprovació reproduïble de cobertura abans de l’entrada en servei, amb excepcions visibles.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26 i 46",
          "state": "documentat"
        },
        {
          "id": "CTTI_LB2026",
          "locator": "§5.3",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 5–6 i 12–13",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "A6",
      "processId": "telemetria",
      "relatedProcessIds": [],
      "coordinator": [
        "arquitectura"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "dada_ia"
      ],
      "validators": [
        "propietari_dada",
        "oficina_o11y"
      ],
      "assignmentState": "proposta",
      "evidence": "Dependència amb origen, vigència i comprovació; consulta amb transformacions explicades.",
      "baseCtti": "La memòria descriu PTD i Neo4j Aura corporatiu, amb pilots al CdC. No acredita un graf operatiu complet.",
      "contribution": "Relacionar dades i dependències amb significat compartit, procedència i qualitat comprovable.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 39",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 7–11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "B1",
      "processId": "qualitat_cobertura",
      "relatedProcessIds": [],
      "coordinator": [
        "oficina_o11y"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "gestio_servei",
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Cada nivell es justifica amb abast, data i prova; la dada absent queda sense avaluar.",
      "baseCtti": "El CTTI disposa de famílies, eixos i paquets de mesura; PCN&ME aporta criticitat i moments sensibles.",
      "contribution": "Fer una lectura de maduresa de l’Atles relacionada amb aquest model, sense substituir-lo.",
      "sources": [
        {
          "id": "CTTI_POL2026",
          "locator": "Famílies, eixos i paquets de mesura",
          "state": "documentat"
        },
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "B2",
      "processId": "qualitat_cobertura",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "operadors",
        "eines_o11y"
      ],
      "validators": [
        "oficina_o11y",
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Mancança amb corrector, excepció vigent i prova repetida de tancament.",
      "baseCtti": "El model de servei preveu qualitat de dades, incidències i millora contínua.",
      "contribution": "Unir el deute detectable amb impacte de servei, prioritat i cobertura recuperada.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 7–9",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 8–11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "B3",
      "processId": "qualitat_cobertura",
      "relatedProcessIds": [],
      "coordinator": [
        "eines_o11y",
        "cdc"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "suport_producte"
      ],
      "validators": [
        "oficina_o11y",
        "gestio_servei"
      ],
      "assignmentState": "proposta",
      "evidence": "Un senyal conegut arriba a consulta i avís; cada fallada mostra el tram i la recuperació.",
      "baseCtti": "El 133 ja preveu observar les eines, vigilar integracions i provar continuïtat.",
      "contribution": "Comprovar el recorregut complet i informar al CdC de la visibilitat perduda, separada de la salut del servei.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 5–6",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 10",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ANS133",
          "locator": "CO-INC03/04, p. 18–19",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "B4",
      "processId": "seguiment_valor",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "propietari_dada"
      ],
      "validators": [
        "oficina_o11y",
        "direccio"
      ],
      "assignmentState": "proposta",
      "evidence": "Indicador amb fórmula, font, població, període i versió; informe passat reproduïble.",
      "baseCtti": "La plataforma distingeix Proveïdors, Àmbits, CdC i Direcció; el model ja exigeix informes i comprovació de dades.",
      "contribution": "Servir vistes diferents des d’una mateixa definició i fer que el destinatari pugui comprovar la xifra.",
      "sources": [
        {
          "id": "CTTI_AUDIENCES",
          "locator": "Destinataris",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 7–9",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 9–11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "B5",
      "processId": "problemes",
      "relatedProcessIds": [
        "incidents",
        "alta_canvi"
      ],
      "coordinator": [
        "cdc"
      ],
      "executors": [
        "operadors",
        "eines_o11y",
        "suport_producte"
      ],
      "validators": [
        "gestio_servei",
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Cronologia validada, problema vinculat, acció amb responsable i prova de no recurrència.",
      "baseCtti": "El 132 assigna al CdC la coordinació i el lideratge de problemes segons impacte i perfil; cada equip intervé en el seu àmbit.",
      "contribution": "Reduir la reconstrucció manual i verificar que l’acció corregeix la causa, distingint incident, problema i canvi.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5, 10 i 18",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ANS132",
          "locator": "Seguiment i resolució de problemes, p. 15–23",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "B6",
      "processId": "incidents",
      "relatedProcessIds": [
        "escalats"
      ],
      "coordinator": [
        "cdc"
      ],
      "executors": [
        "operadors",
        "eines_o11y",
        "suport_producte",
        "externs"
      ],
      "validators": [
        "gestio_servei",
        "funcional"
      ],
      "assignmentState": "proposta",
      "evidence": "Traspàs acceptat, evidència per resolutor i temps de treball i espera separats.",
      "baseCtti": "El 132 preveu lideratge CdC en incidents d’alt impacte; el 133 distingeix gestió d’eines i suport de producte.",
      "contribution": "Unir el cas entre eines i proveïdors mantenint responsabilitats, límits de visibilitat i temps compatibles amb els ANS.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5 i 10",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 12–13",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ANS133",
          "locator": "CO-INC03/04, p. 18–19",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "B7",
      "processId": "escalats",
      "relatedProcessIds": [
        "qualitat_cobertura"
      ],
      "coordinator": [
        "cdc",
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "sau"
      ],
      "validators": [
        "gestio_servei"
      ],
      "assignmentState": "proposta",
      "evidence": "Ruta provada fins a acceptació, amb suplència i tractament de l’alerta sense titular.",
      "baseCtti": "PagerDuty figura al model 132 i la matriu aporta rutes i franges de cobertura.",
      "contribution": "Provar l’encaminament complet. La custòdia temporal d’un avís no transfereix la responsabilitat tècnica de la solució.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 11–12",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "B8",
      "processId": "incidents",
      "relatedProcessIds": [
        "escalats",
        "comunicacio",
        "problemes"
      ],
      "coordinator": [
        "cdc"
      ],
      "executors": [
        "operadors",
        "eines_o11y",
        "suport_producte"
      ],
      "validators": [
        "funcional",
        "gestio_servei"
      ],
      "assignmentState": "proposta",
      "evidence": "Expedient coherent entre torns, tasques assumides i comprovació de recuperació del servei.",
      "baseCtti": "SOSTIC, PCN&ME, sales i comunicació ja tenen base documentada. El 132 atribueix el lideratge d’alt impacte al CdC.",
      "contribution": "Conservar context i decisions entre equips i torns, separant recuperació, tancament i revisió posterior.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 25–26",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5, 10–12 i 18",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "C1",
      "processId": "agents",
      "relatedProcessIds": [],
      "coordinator": [
        "govern_ctti"
      ],
      "executors": [
        "dada_ia",
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "govern_ctti",
        "gestio_servei",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Permís efectiu per tasca, aprovació registrada i prova de revocació o retorn al flux humà.",
      "baseCtti": "Hi ha capacitats corporatives d’IA i automatització. El 132 separa coordinació CdC i execució sobre les solucions.",
      "contribution": "Aplicar els nivells N0–N3 de l’Atles a permisos reals. Un agent no amplia les competències de l’equip que l’utilitza.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 37 i 40–42",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 10",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 5–6 i 11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "C2",
      "processId": "agents",
      "relatedProcessIds": [],
      "coordinator": [
        "dada_ia"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "govern_ctti",
        "arquitectura",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Dues implementacions superen el mateix contracte i es substitueixen sense perdre el cas.",
      "baseCtti": "La PTD disposa de capacitats agentives; els serveis descriuen orquestració i automatització.",
      "contribution": "Organitzar funcions interoperables. IA Mesh és la proposta d’Atos per cooperar amb límits quan el cas ho requereixi.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 40–42",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 4–6 i 12–13",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "C3",
      "processId": "coneixement",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "cdc",
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "qualitat",
        "propietari_dada"
      ],
      "assignmentState": "proposta",
      "evidence": "Resposta amb cites vigents i permisos; un document retirat deixa de donar instruccions.",
      "baseCtti": "Els dos serveis ja preveuen repositori corporatiu i consulta amb Confluence, chatbot o IA.",
      "contribution": "Aportar cerca amb context, retirada efectiva del contingut caducat i proves de fidelitat de la resposta.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 7–9",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 7–9",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "C4",
      "processId": "agents",
      "relatedProcessIds": [],
      "coordinator": [
        "dada_ia"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "gestio_servei",
        "qualitat",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Execució reconstruïble, resultat contrastat i regressió detectada encara que l’agent respongui ràpid.",
      "baseCtti": "La memòria descriu capacitats agentives i pilots; la PTD anuncia monitorització d’IA, encara pendent de disponibilitat segons el portal.",
      "contribution": "Comprovar qualitat, permisos, consum i continuïtat amb una línia base de cada agent.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 37 i 40–42",
          "state": "documentat"
        },
        {
          "id": "CTTI_PTD",
          "locator": "Serveis i disponibilitat anunciada",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "C5",
      "processId": "qualitat_cobertura",
      "relatedProcessIds": [],
      "coordinator": [
        "oficina_o11y",
        "cdc"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "gestio_servei"
      ],
      "assignmentState": "proposta",
      "evidence": "Canvi d’alerta provat contra incidents coneguts i fallades rares que cal conservar.",
      "baseCtti": "El catàleg i les funcions de prevenció i millora aporten la base per revisar senyals.",
      "contribution": "Reduir repeticions i cost sense perdre detecció útil ni amagar una segona avaria.",
      "sources": [
        {
          "id": "CTTI_LB2026",
          "locator": "Catàleg de mètriques",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5 i 8–9",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "C6",
      "processId": "problemes",
      "relatedProcessIds": [
        "incidents",
        "agents"
      ],
      "coordinator": [
        "cdc"
      ],
      "executors": [
        "operadors",
        "eines_o11y",
        "dada_ia"
      ],
      "validators": [
        "gestio_servei",
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Hipòtesi amb fonts, contradiccions i següent prova, comparada amb casos resolts.",
      "baseCtti": "AI-Powered Failure Prevention consta com a MVP validat en fase inicial; Neo4j Aura té pilots al CdC.",
      "contribution": "Contrastar i ampliar aquesta base amb diagnòstic reproduïble, dependències vigents i supervisió humana.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 37 i 39",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5 i 18",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "C7",
      "processId": "seguiment_valor",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "dada_ia"
      ],
      "validators": [
        "propietari_dada",
        "oficina_o11y"
      ],
      "assignmentState": "proposta",
      "evidence": "Consulta, fórmula, filtres i resultat conservats; exploració diferenciada de vista validada.",
      "baseCtti": "El model exigeix indicadors calculables i informació coherent; hi ha destinataris corporatius identificats.",
      "contribution": "Generar i explicar vistes de Proveïdors, Àmbits, CdC i Direcció sense inventar definicions.",
      "sources": [
        {
          "id": "CTTI_AUDIENCES",
          "locator": "Destinataris",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 7–9",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 9–11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "D1",
      "processId": "autoservei",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "sau"
      ],
      "validators": [
        "oficina_o11y",
        "funcional"
      ],
      "assignmentState": "proposta",
      "evidence": "Petició amb permisos comprovats, estat final verificat i mantenidor identificat.",
      "baseCtti": "Àtom/SIC i l’evolució d’autoservei ja aporten canals; el 133 preveu tasques bàsiques procedimentades.",
      "contribution": "Automatitzar operacions repetibles dins del canal adequat, amb aprovació quan pertoqui i sense crear un segon portal per defecte.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26–29 i 46",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 3–6",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "D2",
      "processId": "alta_canvi",
      "relatedProcessIds": [],
      "coordinator": [
        "oficina_o11y"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "qualitat",
        "gestio_servei"
      ],
      "assignmentState": "proposta",
      "evidence": "Paquet amb mantenidor, versions, proves positives i negatives i retorn a versió anterior.",
      "baseCtti": "La base preveu evolució, proves d’acceptació i traspàs del projecte a l’administració.",
      "contribution": "Compartir deteccions mantingudes i provar-ne l’encaix abans d’activar-les en un altre servei.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 3–6 i 9–10",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "D3",
      "processId": "coneixement",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "cdc",
        "eines_o11y",
        "operadors",
        "sau"
      ],
      "validators": [
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Cada rol resol un cas de pràctica i aporta l’evidència que necessita el següent equip.",
      "baseCtti": "El 133 preveu formació i adopció; Àtom acompanya l’evolució del SAU i dels canals de suport.",
      "contribution": "Acompanyar els canvis amb exercicis per rol i millores als materials a partir de les dificultats observades.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 27–29",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 10–11",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "E1",
      "processId": "resultat_servei",
      "relatedProcessIds": [],
      "coordinator": [
        "funcional",
        "area_tic"
      ],
      "executors": [
        "operadors",
        "eines_o11y"
      ],
      "validators": [
        "funcional",
        "propietari_dada"
      ],
      "assignmentState": "proposta",
      "evidence": "Finalitzacions i reintents conciliats amb la font de negoci i relacionats amb traces.",
      "baseCtti": "PCN&ME recull processos crítics i moments d’estrès. Patró ja recull informació de negoci d’aplicacions.",
      "contribution": "Connectar aquestes dades amb resultat, passos del procés i dependències, amb definicions funcionals validades.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 12–13",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "E2",
      "processId": "resultat_servei",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei",
        "funcional"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "oficina_o11y",
        "funcional"
      ],
      "assignmentState": "proposta",
      "evidence": "SLO reproduïble, dada absent explícita i relació documentada amb índex de salut i ANS.",
      "baseCtti": "El CTTI disposa d’índex de salut, ANS i seguiment a CONTIC; PCN&ME i Patró aporten context de negoci.",
      "contribution": "Afegir objectius de resultat i marge d’error, mantenint separats servei prestat, temps de cada equip i compromisos contractuals.",
      "sources": [
        {
          "id": "CTTI_POL2026",
          "locator": "Famílies, eixos i paquets de mesura",
          "state": "documentat"
        },
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 12–13",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ANS132",
          "locator": "Fonts i càlcul, p. 3–8",
          "state": "model_previst"
        },
        {
          "id": "CTTI_ANS133",
          "locator": "CO-INC03/04, p. 18–19",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "E3",
      "processId": "seguiment_valor",
      "relatedProcessIds": [],
      "coordinator": [
        "direccio"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "gestio_servei",
        "propietari_dada"
      ],
      "assignmentState": "proposta",
      "evidence": "Cost conciliat amb les fonts FinOps, repartiment explicat i cobertura conservada.",
      "baseCtti": "La memòria documenta FinOps a la PTD i al núvol.",
      "contribution": "Ampliar l’atribució al servei observat i al resultat, fent visible el cost d’observar i allò que encara no es pot assignar.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 40 i 47",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "E4",
      "processId": "seguiment_valor",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "cdc",
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "direccio"
      ],
      "assignmentState": "proposta",
      "evidence": "Benefici net contrastat després de descomptar excepcions, supervisió i manteniment.",
      "baseCtti": "Els dos serveis ja exigeixen anàlisi cost/benefici i comprovació del resultat de la millora.",
      "contribution": "Mesurar capacitat recuperada amb una línia base i relacionar-ne la reinversió amb una millora demostrada.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 8–9",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 9–10",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "F1",
      "processId": "reversibilitat",
      "relatedProcessIds": [],
      "coordinator": [
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "suport_producte"
      ],
      "validators": [
        "govern_ctti",
        "arquitectura"
      ],
      "assignmentState": "proposta",
      "evidence": "Un equip receptor reconstrueix funcions acordades i identifica temps, cost i límits.",
      "baseCtti": "La gestió del servei preveu documentació, coneixement i traspàs. Això no demostra per si sol la portabilitat entre plataformes.",
      "contribution": "Assajar la sortida amb un destí alternatiu i proves operatives; distingir reversibilitat i continuïtat de negoci.",
      "sources": [
        {
          "id": "CTTI_T132",
          "locator": "p. 7–9",
          "state": "model_previst"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 3–6",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "F2",
      "processId": "dades_accessos",
      "relatedProcessIds": [],
      "coordinator": [
        "propietari_dada"
      ],
      "executors": [
        "eines_o11y",
        "dada_ia"
      ],
      "validators": [
        "govern_ctti",
        "propietari_dada",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Conjunt aprovat amb finalitat, diccionari, agregació, exclusions i procés de correcció.",
      "baseCtti": "La memòria i el 133 identifiquen govern i propietaris de dades; disposar de PTD no implica poder publicar-les.",
      "contribution": "Provar una publicació acotada només quan el responsable autoritzi el contingut i el detall.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 42",
          "state": "documentat"
        },
        {
          "id": "CTTI_T133",
          "locator": "p. 7–8",
          "state": "model_previst"
        }
      ]
    },
    {
      "id": "F3",
      "processId": "dades_accessos",
      "relatedProcessIds": [],
      "coordinator": [
        "propietari_dada",
        "seguretat"
      ],
      "executors": [
        "eines_o11y",
        "operadors"
      ],
      "validators": [
        "govern_ctti",
        "propietari_dada",
        "seguretat"
      ],
      "assignmentState": "proposta",
      "evidence": "Consulta o exportació fora d’abast bloquejada; accessos privilegiats traçables.",
      "baseCtti": "El 133 preveu permisos i accessos de les eines, i relació amb propietaris i govern de dades.",
      "contribution": "Aplicar el mateix límit des de la font fins a consulta, suport i compartició; validar cada frontera.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 5–8",
          "state": "model_previst"
        },
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 42 i 62",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "G1",
      "processId": "exposicio",
      "relatedProcessIds": [],
      "coordinator": [
        "seguretat"
      ],
      "executors": [
        "operadors",
        "eines_o11y"
      ],
      "validators": [
        "seguretat",
        "gestio_servei"
      ],
      "assignmentState": "proposta",
      "evidence": "Exposició contrastada i mitigació comprovada amb impacte de servei visible.",
      "baseCtti": "El CTTI, l’Agència i el SOC tenen circuits de seguretat; el model de mesura inclou seguretat i obsolescència.",
      "contribution": "Relacionar exposició, dependències i servei dins del circuit de ciberseguretat, sense traspassar-ne funcions al CdC.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 47 i 62",
          "state": "documentat"
        },
        {
          "id": "CTTI_POL2026",
          "locator": "Famílies, eixos i paquets de mesura",
          "state": "documentat"
        },
        {
          "id": "CTTI_ESC2026",
          "locator": "Rols, serveis i rutes d’escalat",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "G2",
      "processId": "resultat_servei",
      "relatedProcessIds": [],
      "coordinator": [
        "funcional",
        "gestio_servei"
      ],
      "executors": [
        "eines_o11y",
        "operadors",
        "suport_producte"
      ],
      "validators": [
        "funcional",
        "qualitat"
      ],
      "assignmentState": "proposta",
      "evidence": "Recorregut complet i sonda sana, amb resultat contrastat per servei, canal i ubicació.",
      "baseCtti": "Les sondes distribuïdes són base del 133; PCN&ME ajuda a escollir processos i moments sensibles.",
      "contribution": "Provar el resultat d’ús, distingint fallada de sonda i fallada del servei, també en VDI i comunicacions.",
      "sources": [
        {
          "id": "CTTI_T133",
          "locator": "p. 6 i 12–13",
          "state": "model_previst"
        },
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 26",
          "state": "documentat"
        }
      ]
    },
    {
      "id": "G3",
      "processId": "comunicacio",
      "relatedProcessIds": [
        "incidents"
      ],
      "coordinator": [
        "cdc",
        "area_tic"
      ],
      "executors": [
        "eines_o11y",
        "sau",
        "operadors"
      ],
      "validators": [
        "gestio_servei",
        "funcional"
      ],
      "assignmentState": "proposta",
      "evidence": "Estat amb origen i hora; missatge validat per destinatari i alternativa manual provada.",
      "baseCtti": "La memòria i el 132 descriuen comunicació d’incidents, sales i coordinació amb Àrees TIC.",
      "contribution": "Publicar una vista coherent des d’aquests canals, separant seguiment intern, avís departamental i eventual comunicació pública.",
      "sources": [
        {
          "id": "CTTI_MEM2025",
          "locator": "p. 25–29",
          "state": "documentat"
        },
        {
          "id": "CTTI_T132",
          "locator": "p. 4–5",
          "state": "model_previst"
        }
      ]
    }
  ],
  "scopePatch": {
    "scope.intro": "El mapa relaciona el procés públic amb el servei TIC, les dependències i els equips que hi intervenen. Parteix de la memòria, el llibre blanc, la matriu d’escalats i els models dels serveis 132 i 133. Atos proposa comprovar aquest encaix amb cada servei i fer que totes les fitxes comparteixin els mateixos actors i processos.",
    "scope.relation": "Procés i moment crític → servei TIC → aplicacions i dependències → responsables → mesura i resposta → recuperació i millora. Les eines donen suport a aquest recorregut; no són actors.",
    "scope.limit": "Els deu àmbits són una lectura de cobertura de l’Atles, diferenciada de les cinc famílies oficials del CTTI. Les assignacions de cada pilot es validaran amb els responsables; els models 132/133 no acrediten implantació general avui. Cobertura i disponibilitat horària es comproven per servei.",
    "scope.source": "Síntesi de la Memòria CTTI 2025, documentació d’observabilitat d’agost de 2026, matriu d’escalats de maig de 2026 i models de servei 132/133. Revisió: 15 de setembre de 2026. No es publiquen documents originals ni dades de contacte.",
    "scope.validation": "Relacionar família oficial, servei, procés crític i responsable amb l’inventari vigent. Escollir mostres representatives per criticitat i dependències. Comprovar senyals esperats, frescor, identificadors, rutes, acceptació i recuperació. Distingir fallada de servei i pèrdua de visibilitat. Mostrar «no avaluat» quan falti evidència i vincular cada mancança a B2."
  },
  "domainCardAdditions": {
    "01": [
      "B5",
      "B8",
      "C1",
      "C2",
      "C3",
      "C4",
      "C7",
      "D1",
      "D2",
      "F2"
    ],
    "02": [
      "A3",
      "C2",
      "C7",
      "F2",
      "F3"
    ],
    "03": [
      "A3",
      "B2",
      "C1",
      "C2",
      "D2",
      "E4"
    ],
    "04": [
      "A3",
      "D2"
    ],
    "05": [
      "D2",
      "F3"
    ],
    "06": [
      "D2",
      "G3"
    ],
    "07": [
      "A3",
      "C7",
      "D2"
    ],
    "08": [
      "C4",
      "D2"
    ],
    "09": [
      "D2",
      "G3"
    ],
    "10": [
      "A3",
      "C1",
      "C2",
      "C3",
      "C4",
      "C7",
      "D1",
      "D2",
      "D3",
      "E2",
      "F2",
      "F3",
      "G3"
    ]
  },
  "domainPatches": {
    "02": {
      "assets": "Oracle i SQL Server; integracions i SFTP corporatiu; dades mestres i Plataforma Transversal de Dades; Neo4j Aura corporatiu i pilots al CdC; analítica avançada i IA; identitats i AD."
    },
    "03": {
      "assets": "Lots CPD1–CPD4 i serveis cloud; AWS, Azure i Google Cloud segons l’abast del servei; OpenShift i virtualització; emmagatzematge Isilon i ECA; còpies i restauració; dependències d’alimentació com el SAI d’Olímpia. Els lots no equivalen al nombre de centres físics."
    },
    "08": {
      "actors": "Seguretat del CTTI; Agència de Ciberseguretat i SOC; enginyeria de seguretat; responsables d’identitat; equips operatius del servei."
    },
    "10": {
      "assets": "Gestió de servei amb Àtom/Helix i els circuits corporatius aplicables; SOSTIC, PCN&ME i PagerDuty; gestió de canvis, problemes i incidents; eines d’observabilitat i canals d’avís; CONTIC per al seguiment corresponent; escalats de nivell 0 a nivell 4.",
      "actors": "Centre de Control; gestió del servei i de l’entrega; Àrees TIC; SAU; gestió d’eines d’observabilitat; equips resolutors, integradors i fabricants; responsables funcionals quan el cas ho requereixi."
    }
  },
  "domainRoleIds": {
    "01": [
      "funcional",
      "area_tic",
      "gestio_servei",
      "operadors",
      "externs"
    ],
    "02": [
      "propietari_dada",
      "dada_ia",
      "arquitectura",
      "operadors",
      "eines_o11y"
    ],
    "03": [
      "operadors",
      "eines_o11y",
      "suport_producte",
      "arquitectura"
    ],
    "04": [
      "operadors",
      "suport_producte",
      "eines_o11y"
    ],
    "05": [
      "operadors",
      "eines_o11y",
      "externs",
      "gestio_servei"
    ],
    "06": [
      "operadors",
      "suport_producte",
      "gestio_servei"
    ],
    "07": [
      "sau",
      "operadors",
      "suport_producte",
      "gestio_servei"
    ],
    "08": [
      "seguretat",
      "operadors",
      "eines_o11y"
    ],
    "09": [
      "operadors",
      "suport_producte",
      "funcional",
      "externs"
    ],
    "10": [
      "cdc",
      "gestio_servei",
      "area_tic",
      "sau",
      "eines_o11y",
      "operadors",
      "suport_producte"
    ]
  },
  "coverageNote": "Els operadors es despleguen als deu àmbits tècnics de cobertura. SAU, gestió del servei i Àrea TIC tenen funcions diferents. Les validacions poden ser funcionals, operatives o de criteri; no totes són necessàries en cada actuació."
};
