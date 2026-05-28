export declare const fill: {
    readonly neutral: {
        /** @deprecated */
        readonly default: {
            readonly default: "#FFFFFF";
            readonly hover: "#EDEDED";
            readonly active: "#D4D4D4";
        };
        /** @deprecated */
        readonly weak: {
            readonly default: "#F6F6F6";
            readonly hover: "#EDEDED";
            readonly active: "#D4D4D4";
        };
        /** @deprecated */
        readonly strong: {
            readonly default: "#EDEDED";
            readonly hover: "#D4D4D4";
            readonly active: "#BCBCBC";
        };
        /** @deprecated */
        readonly inverse: {
            readonly default: "#4B4B4B";
            readonly hover: "#3B3B3B";
            readonly active: "#1C1C1C";
        };
        /** @deprecated */
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
        /** @deprecated */
        readonly data: {
            readonly default: "#FF5F3C";
            readonly weak: "#FFA591";
        };
        /** @deprecated */
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
        /** @deprecated */
        readonly data: {
            readonly default: "#417DFC";
            readonly weak: "#9DBCFD";
        };
        /** @deprecated */
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
        /** @deprecated */
        readonly default: {
            readonly default: "#FFB905";
            readonly hover: "#D7990A";
            readonly active: "#B78109";
        };
        /** @deprecated */
        readonly weak: {
            readonly default: "#FFF6DD";
            readonly hover: "#FFECB9";
            readonly active: "#FFCE47";
        };
        /** @deprecated */
        readonly warning: {
            readonly default: "#FFECB9";
            readonly hover: "#FFCE47";
            readonly active: "#FFB905";
        };
        /** @deprecated */
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
        /** @deprecated */
        readonly default: {
            readonly default: "#A25DFF";
            readonly hover: "#8D51DE";
            readonly active: "#7543B9";
        };
        /** @deprecated */
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
        /** @deprecated */
        readonly default: {
            readonly default: "#AE7E8B";
            readonly hover: "#8F6772";
            readonly active: "#77565F";
        };
        /** @deprecated */
        readonly data: {
            readonly default: "#CE95A5";
            readonly weak: "#FFE8EE";
        };
        /** @deprecated */
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
        /** @deprecated */
        readonly default: {
            readonly default: "transparent";
            readonly hover: "rgba(75, 75, 75, .1)";
            readonly active: "rgba(75, 75, 75, .2)";
        };
        /** @deprecated */
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
    /** @deprecated */
    readonly primary: {
        /** @deprecated */
        readonly data: {
            readonly default: "#2F9D6F";
            readonly weak: "#8CC9AF";
        };
        /** @deprecated */
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
