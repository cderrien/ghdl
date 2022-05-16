GNATdoc.Documentation = {
  "label": "Synth.Vhdl_Stmts",
  "qualifier": "",
  "summary": [
  ],
  "description": [
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "No_Dyn_Name",
          "qualifier": "",
          "line": 48,
          "column": 4,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 48,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "No_Dyn_Name"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "constant"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dyn_Name"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pfx_Off"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "No_Value_Offsets"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 49,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pfx_Typ"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "null"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 50,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Voff"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "No_Net"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Constants and variables"
    },
    {
      "entities": [
        {
          "label": "Target_Kind",
          "qualifier": "",
          "line": 114,
          "column": 9,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 114,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Kind",
                      "href": "docs/synth__vhdl_stmts___spec.html#L114C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 115,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 116,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  The target is an object or a static part of it."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 117,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Simple",
                      "href": "docs/synth__vhdl_stmts___spec.html#L117C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 118,
                  "children": [
                  ]
                },
                {
                  "kind": "line",
                  "number": 119,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  The target is an aggregate."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 120,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Aggregate",
                      "href": "docs/synth__vhdl_stmts___spec.html#L120C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ","
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 121,
                  "children": [
                  ]
                },
                {
                  "kind": "line",
                  "number": 122,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  The assignment is dynamically indexed."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 123,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Memory",
                      "href": "docs/synth__vhdl_stmts___spec.html#L123C7"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 124,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";",
                      "href": "docs/synth__vhdl_stmts___spec.html#L114C9"
                    }
                  ]
                }
              ]
            }
          ],
          "literals": [
            {
              "label": "Target_Simple",
              "line": 117,
              "column": 7,
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "The target is an aggregate.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Target_Aggregate",
              "line": 120,
              "column": 7,
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "The assignment is dynamically indexed.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Target_Memory",
              "line": 123,
              "column": 7,
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Simple types"
    },
    {
      "entities": [
        {
          "label": "Dyn_Name",
          "qualifier": "",
          "line": 38,
          "column": 9,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 38,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dyn_Name",
                      "href": "docs/synth__vhdl_stmts___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "record"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 39,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  Start and type of the indexed part, which can be a part of the"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 40,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  base name."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pfx_Off",
                      "href": "docs/synth__vhdl_stmts___spec.html#L41C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Value_Offsets",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L181C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pfx_Typ",
                      "href": "docs/synth__vhdl_stmts___spec.html#L42C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L95C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 43,
                  "children": [
                  ]
                },
                {
                  "kind": "line",
                  "number": 44,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  Variable offset."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Voff",
                      "href": "docs/synth__vhdl_stmts___spec.html#L45C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Net",
                      "href": "docs/netlists___spec.html#L398C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 46,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "end"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "record"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";",
                      "href": "docs/synth__vhdl_stmts___spec.html#L38C9"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Dynamic index for Synth_Assignment_Prefix.\n"
                },
                {
                  "kind": "span",
                  "text": "As dynamic is about dynamic (!) index, the index is a net.\n"
                }
              ]
            }
          ],
          "fields": [
            {
              "label": "Pfx_Off",
              "line": 41,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Value_Offsets",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L181C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Start and type of the indexed part, which can be a part of the\n"
                    },
                    {
                      "kind": "span",
                      "text": "base name.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Pfx_Typ",
              "line": 42,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L95C9"
              },
              "description": [
              ]
            },
            {
              "label": "Voff",
              "line": 45,
              "column": 7,
              "type": {
                "label": "Netlists.Net",
                "docHref": "docs/netlists___spec.html#L110C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Variable offset.\n"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "Target_Info",
          "qualifier": "",
          "line": 126,
          "column": 9,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 126,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Info",
                      "href": "docs/synth__vhdl_stmts___spec.html#L126C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Kind",
                      "href": "docs/synth__vhdl_stmts___spec.html#L126C22"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Kind",
                      "href": "docs/synth__vhdl_stmts___spec.html#L114C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Simple"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "record"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 127,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  In all cases, the type of the target is known or computed."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 128,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Targ_Type",
                      "href": "docs/synth__vhdl_stmts___spec.html#L128C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L95C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 129,
                  "children": [
                  ]
                },
                {
                  "kind": "line",
                  "number": 130,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "case"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Kind"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 131,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "when"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Simple"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 132,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  For a simple target, the destination is known."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 133,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Obj",
                      "href": "docs/synth__vhdl_stmts___spec.html#L133C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 134,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Off",
                      "href": "docs/synth__vhdl_stmts___spec.html#L134C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Value_Offsets",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L181C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 135,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "when"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Aggregate"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 136,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  For an aggregate: the type is computed and the details will"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 137,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  be handled at the assignment."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 138,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Aggr",
                      "href": "docs/synth__vhdl_stmts___spec.html#L138C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 139,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "         "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "when"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Memory"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "=>"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 140,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  For a memory: the destination is known."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 141,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Mem_Obj",
                      "href": "docs/synth__vhdl_stmts___spec.html#L141C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 142,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  The dynamic offset."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 143,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Mem_Dyn",
                      "href": "docs/synth__vhdl_stmts___spec.html#L143C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dyn_Name",
                      "href": "docs/synth__vhdl_stmts___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 144,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "comment",
                      "text": "--  Offset of the data to be accessed from the memory."
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 145,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Mem_Doff",
                      "href": "docs/synth__vhdl_stmts___spec.html#L145C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Uns32",
                      "href": "docs/types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 146,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "end"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "case"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 147,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "end"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "record"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";",
                      "href": "docs/synth__vhdl_stmts___spec.html#L126C9"
                    }
                  ]
                }
              ]
            }
          ],
          "fields": [
            {
              "label": "Kind",
              "line": 126,
              "column": 22,
              "type": {
                "label": "Synth.Vhdl_Stmts.Target_Kind",
                "docHref": "docs/synth__vhdl_stmts___spec.html#L114C9"
              },
              "description": [
              ]
            },
            {
              "label": "Targ_Type",
              "line": 128,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L95C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "In all cases, the type of the target is known or computed.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Obj",
              "line": 133,
              "column": 13,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "For a simple target, the destination is known.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Off",
              "line": 134,
              "column": 13,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Value_Offsets",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L181C9"
              },
              "description": [
              ]
            },
            {
              "label": "Aggr",
              "line": 138,
              "column": 13,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "For an aggregate: the type is computed and the details will\n"
                    },
                    {
                      "kind": "span",
                      "text": "be handled at the assignment.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Mem_Obj",
              "line": 141,
              "column": 13,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "The dynamic offset.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Mem_Dyn",
              "line": 143,
              "column": 13,
              "type": {
                "label": "Synth.Vhdl_Stmts.Dyn_Name",
                "docHref": "docs/synth__vhdl_stmts___spec.html#L38C9"
              },
              "description": [
                {
                  "kind": "paragraph",
                  "children": [
                    {
                      "kind": "span",
                      "text": "Offset of the data to be accessed from the memory.\n"
                    }
                  ]
                }
              ]
            },
            {
              "label": "Mem_Doff",
              "line": 145,
              "column": 13,
              "type": {
                "label": "Types.Uns32",
                "docHref": "docs/types___spec.html#L39C9"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Record types"
    },
    {
      "entities": [
        {
          "label": "Execute_Assertion_Statement",
          "qualifier": "",
          "line": 98,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 98,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Execute_Assertion_Statement",
                      "href": "docs/synth__vhdl_stmts___spec.html#L98C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L98C43"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 99,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                          "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/synth__vhdl_stmts___spec.html#L99C43"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 98,
              "column": 43,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 99,
              "column": 43,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Execute_Static_Case_Statement",
          "qualifier": "",
          "line": 111,
          "column": 13,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 111,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Execute_Static_Case_Statement",
                      "href": "docs/synth__vhdl_stmts___spec.html#L111C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 112,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L112C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/synth__vhdl_stmts___spec.html#L112C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sel",
                      "href": "docs/synth__vhdl_stmts___spec.html#L112C47"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Return the statements chain to be executed.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 112,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 112,
              "column": 34,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Sel",
              "line": 112,
              "column": 47,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Finish_For_Loop_Statement",
          "qualifier": "",
          "line": 103,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 103,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Finish_For_Loop_Statement",
                      "href": "docs/synth__vhdl_stmts___spec.html#L103C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L103C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 104,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/synth__vhdl_stmts___spec.html#L104C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 103,
              "column": 41,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 104,
              "column": 41,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Init_For_Loop_Statement",
          "qualifier": "",
          "line": 100,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 100,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Init_For_Loop_Statement",
                      "href": "docs/synth__vhdl_stmts___spec.html#L100C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L100C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 101,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/synth__vhdl_stmts___spec.html#L101C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 102,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/synth__vhdl_stmts___spec.html#L102C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 100,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 101,
              "column": 39,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 102,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Assignment",
          "qualifier": "",
          "line": 65,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 65,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Assignment",
                      "href": "docs/synth__vhdl_stmts___spec.html#L65C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L65C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 66,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target",
                      "href": "docs/synth__vhdl_stmts___spec.html#L66C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 67,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/synth__vhdl_stmts___spec.html#L67C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 68,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Loc",
                      "href": "docs/synth__vhdl_stmts___spec.html#L68C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 65,
              "column": 32,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Target",
              "line": 66,
              "column": 32,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 67,
              "column": 32,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Loc",
              "line": 68,
              "column": 32,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Assignment_Prefix",
          "qualifier": "",
          "line": 58,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 58,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Assignment_Prefix",
                      "href": "docs/synth__vhdl_stmts___spec.html#L58C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L58C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 59,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pfx",
                      "href": "docs/synth__vhdl_stmts___spec.html#L59C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 60,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dest_Base",
                      "href": "docs/synth__vhdl_stmts___spec.html#L60C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 61,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dest_Typ",
                      "href": "docs/synth__vhdl_stmts___spec.html#L61C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L95C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 62,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dest_Off",
                      "href": "docs/synth__vhdl_stmts___spec.html#L62C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Value_Offsets",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L181C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 63,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dest_Dyn",
                      "href": "docs/synth__vhdl_stmts___spec.html#L63C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dyn_Name",
                      "href": "docs/synth__vhdl_stmts___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Transform PFX into DEST_*.\n"
                },
                {
                  "kind": "span",
                  "text": "DEST_BASE is the base object (with its own typ).  Can be the result,\n"
                },
                {
                  "kind": "span",
                  "text": "a net or an object larger than the result.\n"
                },
                {
                  "kind": "span",
                  "text": "DEST_TYP is the type of the result.\n"
                },
                {
                  "kind": "span",
                  "text": "DEST_OFF is the offset, within DEST_DYN.\n"
                },
                {
                  "kind": "span",
                  "text": "DEST_DYN is set (Voff field set) when there is a non-static index.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 58,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Pfx",
              "line": 59,
              "column": 39,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Dest_Base",
              "line": 60,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Dest_Typ",
              "line": 61,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L95C9"
              },
              "description": [
              ]
            },
            {
              "label": "Dest_Off",
              "line": 62,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Value_Offsets",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L181C9"
              },
              "description": [
              ]
            },
            {
              "label": "Dest_Dyn",
              "line": 63,
              "column": 39,
              "type": {
                "label": "Synth.Vhdl_Stmts.Dyn_Name",
                "docHref": "docs/synth__vhdl_stmts___spec.html#L38C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Attribute_Values",
          "qualifier": "",
          "line": 91,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 91,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Attribute_Values",
                      "href": "docs/synth__vhdl_stmts___spec.html#L91C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 92,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L92C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Unit",
                      "href": "docs/synth__vhdl_stmts___spec.html#L92C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Apply attributes of UNIT.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 92,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Unit",
              "line": 92,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Concurrent_Statements",
          "qualifier": "",
          "line": 87,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 87,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Concurrent_Statements",
                      "href": "docs/synth__vhdl_stmts___spec.html#L87C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 88,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L88C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmts",
                      "href": "docs/synth__vhdl_stmts___spec.html#L88C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Generate netlists for concurrent statements STMTS.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 88,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmts",
              "line": 88,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Procedure_Call",
          "qualifier": "",
          "line": 108,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 108,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Procedure_Call",
                      "href": "docs/synth__vhdl_stmts___spec.html#L108C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L108C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/synth__vhdl_stmts___spec.html#L108C67"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 108,
              "column": 36,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 108,
              "column": 67,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Read_Memory",
          "qualifier": "",
          "line": 70,
          "column": 13,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 70,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Read_Memory",
                      "href": "docs/synth__vhdl_stmts___spec.html#L70C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L70C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 71,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Obj",
                      "href": "docs/synth__vhdl_stmts___spec.html#L71C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 72,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res_Typ",
                      "href": "docs/synth__vhdl_stmts___spec.html#L72C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L95C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 73,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Off",
                      "href": "docs/synth__vhdl_stmts___spec.html#L73C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Uns32",
                      "href": "docs/types___spec.html#L39C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 74,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dyn",
                      "href": "docs/synth__vhdl_stmts___spec.html#L74C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Dyn_Name",
                      "href": "docs/synth__vhdl_stmts___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 75,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                               "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Loc",
                      "href": "docs/synth__vhdl_stmts___spec.html#L75C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 70,
              "column": 32,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Obj",
              "line": 71,
              "column": 32,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L96C9"
              },
              "description": [
              ]
            },
            {
              "label": "Res_Typ",
              "line": 72,
              "column": 32,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L95C9"
              },
              "description": [
              ]
            },
            {
              "label": "Off",
              "line": 73,
              "column": 32,
              "type": {
                "label": "Types.Uns32",
                "docHref": "docs/types___spec.html#L39C9"
              },
              "description": [
              ]
            },
            {
              "label": "Dyn",
              "line": 74,
              "column": 32,
              "type": {
                "label": "Synth.Vhdl_Stmts.Dyn_Name",
                "docHref": "docs/synth__vhdl_stmts___spec.html#L38C9"
              },
              "description": [
              ]
            },
            {
              "label": "Loc",
              "line": 75,
              "column": 32,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Subprogram_Association",
          "qualifier": "",
          "line": 31,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 31,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Subprogram_Association",
                      "href": "docs/synth__vhdl_stmts___spec.html#L31C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Subprg_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L31C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 32,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Caller_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L32C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 33,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inter_Chain",
                      "href": "docs/synth__vhdl_stmts___spec.html#L33C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 34,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Assoc_Chain",
                      "href": "docs/synth__vhdl_stmts___spec.html#L34C44"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Subprg_Inst",
              "line": 31,
              "column": 44,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Caller_Inst",
              "line": 32,
              "column": 44,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Inter_Chain",
              "line": 33,
              "column": 44,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Assoc_Chain",
              "line": 34,
              "column": 44,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Target",
          "qualifier": "",
          "line": 149,
          "column": 13,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 149,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Target",
                      "href": "docs/synth__vhdl_stmts___spec.html#L149C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L149C27"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 150,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                          "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target",
                      "href": "docs/synth__vhdl_stmts___spec.html#L150C27"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Target_Info",
                      "href": "docs/synth__vhdl_stmts___spec.html#L126C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 149,
              "column": 27,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Target",
              "line": 150,
              "column": 27,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_User_Function_Call",
          "qualifier": "",
          "line": 77,
          "column": 13,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 77,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_User_Function_Call",
                      "href": "docs/synth__vhdl_stmts___spec.html#L77C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 78,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L78C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Expr",
                      "href": "docs/synth__vhdl_stmts___spec.html#L78C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 78,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Expr",
              "line": 78,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_User_Operator",
          "qualifier": "",
          "line": 81,
          "column": 13,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 81,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_User_Operator",
                      "href": "docs/synth__vhdl_stmts___spec.html#L81C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L81C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 82,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Left_Expr",
                      "href": "docs/synth__vhdl_stmts___spec.html#L82C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 83,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Right_Expr",
                      "href": "docs/synth__vhdl_stmts___spec.html#L83C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 84,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Expr",
                      "href": "docs/synth__vhdl_stmts___spec.html#L84C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L96C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Operation implemented by a user function.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 81,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Left_Expr",
              "line": 82,
              "column": 34,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Right_Expr",
              "line": 83,
              "column": 34,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Expr",
              "line": 84,
              "column": 34,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Variable_Assignment",
          "qualifier": "",
          "line": 105,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 105,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Variable_Assignment",
                      "href": "docs/synth__vhdl_stmts___spec.html#L105C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L105C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 106,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/synth__vhdl_stmts___spec.html#L106C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 105,
              "column": 41,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 106,
              "column": 41,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Synth_Verification_Unit",
          "qualifier": "",
          "line": 94,
          "column": 14,
          "src": "srcs/synth-vhdl_stmts.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 94,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Verification_Unit",
                      "href": "docs/synth__vhdl_stmts___spec.html#L94C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L94C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 95,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Unit",
                      "href": "docs/synth__vhdl_stmts___spec.html#L95C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L6999C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 96,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Parent_Inst",
                      "href": "docs/synth__vhdl_stmts___spec.html#L96C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 94,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            },
            {
              "label": "Unit",
              "line": 95,
              "column": 39,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L6999C12"
              },
              "description": [
              ]
            },
            {
              "label": "Parent_Inst",
              "line": 96,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L32C9"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};