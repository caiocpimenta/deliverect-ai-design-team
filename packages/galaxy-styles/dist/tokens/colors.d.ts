export declare const colors: {
    readonly brand: {
        readonly 50: "#F6F6F6";
        readonly 100: "#E7E7E7";
        readonly 200: "#D1D1D1";
        readonly 300: "#B0B0B0";
        readonly 400: "#888888";
        readonly 500: "#6D6D6D";
        readonly 600: "#5D5D5D";
        readonly 700: "#4B4B4B";
        readonly 800: "#3D3D3D";
        readonly 900: "#262626";
    };
    readonly marketing: {
        readonly green: "#05CC79";
        readonly dark_green: "#038851";
        readonly red: "#FF5F3C";
        readonly blue: "#417DFC";
        readonly yellow: "#FFB905";
        readonly purple: "#A25DFF";
        readonly pink: "#FFB8CC";
        readonly black: "#1C1C1C";
    };
    readonly success: {
        readonly 50: "#F0F8F5";
        readonly 100: "#E2F1EB";
        readonly 200: "#B7DDCD";
        readonly 300: "#8CC9AF";
        readonly 400: "#60B491";
        readonly 500: "#2F9D6F";
        readonly 600: "#038851";
        readonly 700: "#026D41";
        readonly 800: "#025734";
        readonly 900: "#024529";
    };
    readonly critical: {
        readonly 50: "#FFF4F2";
        readonly 100: "#FFE9E4";
        readonly 200: "#FFC8BC";
        readonly 300: "#FFA591";
        readonly 400: "#FF7E62";
        readonly 500: "#FF5F3C";
        readonly 600: "#C5492E";
        readonly 700: "#A43D27";
        readonly 800: "#82301F";
        readonly 900: "#672618";
    };
    readonly info: {
        readonly 50: "#F3F7FF";
        readonly 100: "#E6EEFF";
        readonly 200: "#C1D5FE";
        readonly 300: "#9DBCFD";
        readonly 400: "#78A3FD";
        readonly 500: "#417DFC";
        readonly 600: "#386DDB";
        readonly 700: "#2F5AB6";
        readonly 800: "#254890";
        readonly 900: "#1D3972";
    };
    readonly warning: {
        readonly 50: "#FFF6DD";
        readonly 100: "#FFECB9";
        readonly 200: "#FFCE47";
        readonly 300: "#FFB905";
        readonly 400: "#D7990A";
        readonly 500: "#B78109";
        readonly 600: "#986907";
        readonly 700: "#805705";
        readonly 800: "#664404";
        readonly 900: "#523603";
    };
    readonly decorative: {
        readonly 50: "#FFF4F7";
        readonly 100: "#FFE8EE";
        readonly 200: "#FFB8CC";
        readonly 300: "#ECAABD";
        readonly 400: "#CE95A5";
        readonly 500: "#AE7E8B";
        readonly 600: "#8F6772";
        readonly 700: "#77565F";
        readonly 800: "#5E444B";
        readonly 900: "#4A363B";
    };
    readonly magic: {
        readonly 50: "#F9F5FF";
        readonly 100: "#F3EAFF";
        readonly 200: "#E1CBFF";
        readonly 300: "#D0ACFF";
        readonly 400: "#BE8DFF";
        readonly 500: "#A25DFF";
        readonly 600: "#8D51DE";
        readonly 700: "#7543B9";
        readonly 800: "#5D3592";
        readonly 900: "#4A2A74";
    };
    readonly neutral: {
        readonly 0: "#FFFFFF";
        readonly 50: "#F6F6F6";
        readonly 100: "#EDEDED";
        readonly 200: "#D4D4D4";
        readonly 300: "#BCBCBC";
        readonly 400: "#A4A4A4";
        readonly 500: "#8B8B8B";
        readonly 600: "#727272";
        readonly 700: "#5F5F5F";
        readonly 800: "#4B4B4B";
        readonly 900: "#3B3B3B";
        readonly 1000: "#1C1C1C";
    };
    readonly transparent: {
        readonly transparent: "transparent";
        readonly neutral: {
            readonly 0: "rgba(75, 75, 75, 0)";
            readonly 100: "rgba(75, 75, 75, .1)";
            readonly 200: "rgba(75, 75, 75, .2)";
            readonly 300: "rgba(75, 75, 75, .33)";
            readonly 400: "rgba(75, 75, 75, .5)";
        };
        readonly primary: {
            readonly 100: "rgba(3, 136, 81, .12)";
        };
        readonly inverse: {
            readonly 0: "rgba(255, 255, 255, 0)";
            readonly 100: "rgba(255, 255, 255, .1)";
            readonly 200: "rgba(255, 255, 255, .2)";
            readonly 300: "rgba(255, 255, 255, .33)";
            readonly 400: "rgba(255, 255, 255, .5)";
        };
    };
    readonly background: {
        readonly default: "#FFFFFF";
        readonly nav: "#F6F6F6";
        readonly page: "#FFFFFF";
        readonly background: "#FFFFFF";
        readonly navigation1: "#F6F6F6";
        readonly navigation2: "#EDEDED";
        readonly backdrop: "rgba(75, 75, 75, .33)";
        readonly inverse: "#1C1C1C";
    };
    readonly surface: {
        readonly neutral: {
            readonly default: "#FFFFFF";
            readonly hover: "#F6F6F6";
            readonly active: "#EDEDED";
            readonly secondary: {
                readonly default: "#F6F6F6";
                readonly hover: "#EDEDED";
                readonly active: "#D4D4D4";
            };
            readonly tertiary: {
                readonly default: "#EDEDED";
                readonly hover: "#D4D4D4";
                readonly active: "#BCBCBC";
            };
            readonly inactive: "#EDEDED";
            readonly inverse: "#4B4B4B";
            readonly overlay: "rgba(75, 75, 75, .5)";
            readonly interactive: {
                readonly subtle: {
                    readonly default: "#FFFFFF";
                    readonly hover: "#F6F6F6";
                    readonly active: "#EDEDED";
                };
                readonly default: {
                    default: string;
                    hover: string;
                    active: string;
                };
                readonly bold: {
                    readonly default: "#EDEDED";
                    readonly hover: "#D4D4D4";
                    readonly active: "#BCBCBC";
                };
            };
            readonly static: {
                readonly subtle: "#FFFFFF";
                readonly default: "#F6F6F6";
                readonly bold: "#EDEDED";
                readonly inactive: "#D4D4D4";
                readonly inverse: "#4B4B4B";
                readonly overlay: "rgba(75, 75, 75, .5)";
            };
        };
        readonly brand: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
        };
        readonly success: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
        };
        readonly critical: {
            readonly critical: "#C5492E";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly info: {
            readonly info: "#386DDB";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly warning: {
            readonly default: "#FFF6DD";
            readonly hover: "#FFECB9";
            readonly active: "#FFCE47";
            readonly warning: "#FFB905";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                readonly bold: "#FFB905";
                readonly subtle: "#FFF6DD";
            };
        };
        readonly magic: {
            readonly magic: "#A25DFF";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                readonly bold: "#A25DFF";
                readonly subtle: "#F3EAFF";
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly decorative: {
            readonly decorative: "#CE95A5";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                readonly bold: "#CE95A5";
                readonly subtle: "#FFE8EE";
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly primary: {
            readonly success: "#038851";
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
    };
    readonly fill: {
        readonly neutral: {
            readonly default: {
                readonly default: "#FFFFFF";
                readonly hover: "#EDEDED";
                readonly active: "#D4D4D4";
            };
            readonly weak: {
                readonly default: "#F6F6F6";
                readonly hover: "#EDEDED";
                readonly active: "#D4D4D4";
            };
            readonly strong: {
                readonly default: "#EDEDED";
                readonly hover: "#D4D4D4";
                readonly active: "#BCBCBC";
            };
            readonly inverse: {
                readonly default: "#4B4B4B";
                readonly hover: "#3B3B3B";
                readonly active: "#1C1C1C";
            };
            readonly inactive: {
                readonly default: "#EDEDED";
                readonly strong: "#D4D4D4";
            };
            readonly interactive: {
                readonly subtle: {
                    readonly default: "#FFFFFF";
                    readonly hover: "#EDEDED";
                    readonly active: "#D4D4D4";
                };
                readonly bold: {
                    readonly default: "#EDEDED";
                    readonly hover: "#D4D4D4";
                    readonly active: "#BCBCBC";
                };
            };
            readonly static: {
                readonly default: "#FFFFFF";
                readonly subtle: "#D4D4D4";
                readonly skeleton: "#BCBCBC";
                readonly inverse: "#3B3B3B";
                readonly inactive: {
                    readonly subtle: "#EDEDED";
                    readonly bold: "#D4D4D4";
                };
            };
        };
        readonly brand: {
            readonly interactive: {
                readonly bold: {
                    readonly default: "#3D3D3D";
                    readonly hover: "#4B4B4B";
                    readonly active: "#5D5D5D";
                };
                readonly subtle: {
                    default: string;
                    hover: string;
                    active: string;
                };
            };
            readonly static: {
                readonly bold: "#3D3D3D";
                readonly subtle: "#B0B0B0";
            };
        };
        readonly success: {
            readonly interactive: {
                readonly bold: {
                    default: string;
                    hover: string;
                    active: string;
                };
                readonly subtle: {
                    default: string;
                    hover: string;
                    active: string;
                };
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
        };
        readonly critical: {
            readonly data: {
                readonly default: "#FF5F3C";
                readonly weak: "#FFA591";
            };
            readonly critical: {
                readonly default: "#FFC8BC";
                readonly hover: "#FFA591";
                readonly active: "#FF7E62";
            };
            readonly interactive: {
                readonly bold: {
                    default: string;
                    hover: string;
                    active: string;
                };
                readonly subtle: {
                    readonly default: "#FFF4F2";
                    readonly hover: "#FFE9E4";
                    readonly active: "#FFC8BC";
                };
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: {
                default: string;
                hover: string;
                active: string;
            };
            readonly weak: {
                default: string;
                hover: string;
                active: string;
            };
        };
        readonly info: {
            readonly data: {
                readonly default: "#417DFC";
                readonly weak: "#9DBCFD";
            };
            readonly info: {
                readonly default: "#C1D5FE";
                readonly hover: "#9DBCFD";
                readonly active: "#78A3FD";
            };
            readonly interactive: {
                readonly bold: {
                    default: string;
                    hover: string;
                    active: string;
                };
                readonly subtle: {
                    default: string;
                    hover: string;
                    active: string;
                };
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: {
                default: string;
                hover: string;
                active: string;
            };
            readonly weak: {
                default: string;
                hover: string;
                active: string;
            };
        };
        readonly warning: {
            readonly default: {
                readonly default: "#FFB905";
                readonly hover: "#D7990A";
                readonly active: "#B78109";
            };
            readonly weak: {
                readonly default: "#FFF6DD";
                readonly hover: "#FFECB9";
                readonly active: "#FFCE47";
            };
            readonly warning: {
                readonly default: "#FFECB9";
                readonly hover: "#FFCE47";
                readonly active: "#FFB905";
            };
            readonly data: {
                readonly default: "#B78109";
                readonly weak: "#FFCE47";
            };
            readonly interactive: {
                readonly bold: {
                    readonly default: "#FFB905";
                    readonly hover: "#D7990A";
                    readonly active: "#B78109";
                };
                readonly subtle: {
                    default: string;
                    hover: string;
                    active: string;
                };
            };
            readonly static: {
                readonly bold: "#FFB905";
                readonly subtle: "#FFECB9";
            };
        };
        readonly magic: {
            readonly default: {
                readonly default: "#A25DFF";
                readonly hover: "#8D51DE";
                readonly active: "#7543B9";
            };
            readonly magic: {
                readonly default: "#E1CBFF";
                readonly hover: "#D0ACFF";
                readonly active: "#BE8DFF";
            };
            readonly interactive: {
                readonly bold: {
                    default: string;
                    hover: string;
                    active: string;
                };
                readonly subtle: {
                    default: string;
                    hover: string;
                    active: string;
                };
            };
            readonly static: {
                readonly bold: "#A25DFF";
                readonly subtle: "#E1CBFF";
            };
            readonly weak: {
                default: string;
                hover: string;
                active: string;
            };
        };
        readonly decorative: {
            readonly default: {
                readonly default: "#AE7E8B";
                readonly hover: "#8F6772";
                readonly active: "#77565F";
            };
            readonly data: {
                readonly default: "#CE95A5";
                readonly weak: "#FFE8EE";
            };
            readonly decorative: {
                readonly default: "#FFB8CC";
                readonly hover: "#ECAABD";
                readonly active: "#CE95A5";
            };
            readonly interactive: {
                readonly bold: {
                    default: string;
                    hover: string;
                    active: string;
                };
                readonly subtle: {
                    default: string;
                    hover: string;
                    active: string;
                };
            };
            readonly static: {
                readonly bold: "#ECAABD";
                readonly subtle: "#FFE8EE";
            };
            readonly weak: {
                default: string;
                hover: string;
                active: string;
            };
        };
        readonly transparent: {
            readonly default: {
                readonly default: "transparent";
                readonly hover: "rgba(75, 75, 75, .1)";
                readonly active: "rgba(75, 75, 75, .2)";
            };
            readonly inverse: {
                readonly default: "transparent";
                readonly hover: "rgba(255, 255, 255, .1)";
                readonly active: "rgba(255, 255, 255, .2)";
            };
            readonly interactive: {
                readonly default: {
                    readonly default: "rgba(75, 75, 75, 0)";
                    readonly hover: "rgba(75, 75, 75, .1)";
                    readonly active: "rgba(75, 75, 75, .2)";
                };
                readonly inverse: {
                    readonly default: "rgba(255, 255, 255, 0)";
                    readonly hover: "rgba(255, 255, 255, .1)";
                    readonly active: "rgba(255, 255, 255, .2)";
                };
            };
        };
        readonly primary: {
            readonly data: {
                readonly default: "#2F9D6F";
                readonly weak: "#8CC9AF";
            };
            readonly success: {
                readonly default: "#B7DDCD";
                readonly hover: "#8CC9AF";
                readonly active: "#60B491";
            };
            readonly default: {
                default: string;
                hover: string;
                active: string;
            };
            readonly weak: {
                default: string;
                hover: string;
                active: string;
            };
        };
    };
    readonly text: {
        readonly primary: {
            default: string;
            hover: string;
            active: string;
            strong: string;
        };
        readonly neutral: {
            readonly text: "#1C1C1C";
            readonly default: {
                readonly default: "#4B4B4B";
                readonly hover: "#3B3B3B";
                readonly active: "#1C1C1C";
            };
            readonly secondary: "#727272";
            readonly textInverse: "#F6F6F6";
            readonly inactive: "#A4A4A4";
            readonly placeholder: "#8B8B8B";
            readonly interactive: {
                readonly default: "#4B4B4B";
                readonly hover: "#3B3B3B";
                readonly active: "#1C1C1C";
            };
            readonly static: {
                readonly primary: "#1C1C1C";
                readonly secondary: "#727272";
                readonly inverse: "#F6F6F6";
                readonly inactive: "#A4A4A4";
                readonly placeholder: "#8B8B8B";
            };
        };
        readonly brand: {
            interactive: {
                default: string;
                hover: string;
                active: string;
            };
            static: string;
        };
        readonly success: {
            interactive: {
                default: string;
                hover: string;
                active: string;
            };
            static: string;
        };
        readonly warning: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly info: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly critical: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly magic: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly decorative: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
    };
    readonly border: {
        readonly default: "#D4D4D4";
        readonly primary: {
            default: string;
            hover: string;
            active: string;
        };
        readonly neutral: {
            readonly default: {
                readonly default: "#D4D4D4";
                readonly hover: "#BCBCBC";
                readonly active: "#A4A4A4";
            };
            readonly weak: {
                readonly default: "#EDEDED";
                readonly hover: "#D4D4D4";
                readonly active: "#BCBCBC";
            };
            readonly strong: {
                readonly default: "#BCBCBC";
                readonly hover: "#A4A4A4";
                readonly active: "#8B8B8B";
            };
            readonly inverse: {
                readonly default: "#FFFFFF";
                readonly hover: "#F6F6F6";
                readonly active: "#EDEDED";
            };
            readonly inactive: "#A4A4A4";
            readonly divider: "#EDEDED";
            readonly emphasize: "#4B4B4B";
            readonly interactive: {
                readonly default: {
                    readonly default: "#D4D4D4";
                    readonly hover: "#BCBCBC";
                    readonly active: "#A4A4A4";
                };
                readonly subtle: {
                    readonly default: "#EDEDED";
                    readonly hover: "#D4D4D4";
                    readonly active: "#BCBCBC";
                };
                readonly bold: {
                    readonly default: "#BCBCBC";
                    readonly hover: "#A4A4A4";
                    readonly active: "#8B8B8B";
                };
                readonly inverse: {
                    readonly default: "#FFFFFF";
                    readonly hover: "#F6F6F6";
                    readonly active: "#EDEDED";
                };
            };
            readonly static: {
                readonly default: "#D4D4D4";
                readonly inactive: "#EDEDED";
                readonly divider: "#EDEDED";
                readonly emphasize: "#4B4B4B";
            };
        };
        readonly brand: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                readonly bold: "#3D3D3D";
                readonly subtle: "#E7E7E7";
            };
        };
        readonly success: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
        };
        readonly critical: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly info: {
            readonly focus: "#9DBCFD";
            readonly interactive: {
                readonly focus: "#9DBCFD";
                readonly default: string;
                readonly hover: string;
                readonly active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly warning: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                readonly bold: "#B78109";
                readonly subtle: "#FFECB9";
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly magic: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                bold: string;
                subtle: string;
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly decorative: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: {
                readonly bold: "#FFB8CC";
                readonly subtle: "#FFE8EE";
            };
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
    };
    readonly icon: {
        readonly primary: {
            default: string;
            hover: string;
            active: string;
            strong: string;
        };
        readonly neutral: {
            readonly default: {
                readonly default: "#4B4B4B";
                readonly hover: "#3B3B3B";
                readonly active: "#1C1C1C";
            };
            readonly weak: {
                readonly default: "#8B8B8B";
                readonly hover: "#727272";
                readonly active: "#5F5F5F";
            };
            readonly inactive: "#A4A4A4";
            readonly strong: "#1C1C1C";
            readonly inverse: "#FFFFFF";
            readonly interactive: {
                readonly bold: {
                    readonly default: "#4B4B4B";
                    readonly hover: "#3B3B3B";
                    readonly active: "#1C1C1C";
                };
                readonly subtle: {
                    readonly default: "#727272";
                    readonly hover: "#5F5F5F";
                    readonly active: "#4B4B4B";
                };
            };
            readonly static: {
                readonly default: "#1C1C1C";
                readonly inactive: "#A4A4A4";
                readonly inverse: "#FFFFFF";
            };
        };
        readonly brand: {
            interactive: {
                default: string;
                hover: string;
                active: string;
            };
            static: string;
        };
        readonly success: {
            interactive: {
                default: string;
                hover: string;
                active: string;
            };
            static: string;
        };
        readonly warning: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly info: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly critical: {
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly static: string;
            readonly default: string;
            readonly hover: string;
            readonly active: string;
            readonly strong: string;
        };
        readonly magic: {
            readonly static: "#4A2A74";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly strong: "#4A2A74";
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
        readonly decorative: {
            readonly static: "#4A363B";
            readonly interactive: {
                default: string;
                hover: string;
                active: string;
            };
            readonly strong: "#4A363B";
            readonly default: string;
            readonly hover: string;
            readonly active: string;
        };
    };
    readonly data: {
        neutral: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
        success: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
        critical: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
        warning: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
        info: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
        magic: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
        decorative: {
            10: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
        };
    };
    /** @deprecated in favour of success or brand */
    readonly primary: {
        readonly 50: "#F0F8F5";
        readonly 100: "#E2F1EB";
        readonly 200: "#B7DDCD";
        readonly 300: "#8CC9AF";
        readonly 400: "#60B491";
        readonly 500: "#2F9D6F";
        readonly 600: "#038851";
        readonly 700: "#026D41";
        readonly 800: "#025734";
        readonly 900: "#024529";
    };
};
