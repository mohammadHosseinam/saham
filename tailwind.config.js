/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "white" : "#FAFAFA",
        "primary": {
          "100": "#5B4000",
          "90": "#845D00",
          "80": "#AC7A00",
          "70": "#D59700",
          "60": "#FEB913",
          "50": "#FFC63D",
          "40": "#FFD268",
          "30": "#FFDF92",
          "20": "#FFF8E7",
          "10": "#FFF8E7",
        },
        "secondary": {
          "100": "#00095B",
          "90": "#000D84",
          "80": "#0011AC",
          "70": "#0015D5",
          "60": "#132BFE",
          "50": "#3D51FF",
          "40": "#6877FF",
          "30": "#929DFF",
          "20": "#BDC3FF",
          "10": "#E7EAFF",
        },
        "netural": {
          "10": "#F1F1F1",
          "20": "#F2F2F2",
          "30": "#D8D9DB",
          "40": "#BEBFC4",
          "50": "#A5A6AE",
          "60": "#8D8E97",
          "70": "#767780",
          "80": "#5F606A",
          "90": "#494A53",
          "100": "#34353C"
        },
        "warning": {
          "10": "#FFFEE7",
          "20": "#FFFBBD",
          "30": "#FFF992",
          "40": "#FFF768",
          "50": "#FFF53D",
          "60": "#FEF213",
          "70": "#D5CB00",
          "80": "#ACA400",
          "90": "#847D00",
          "100": "#5B5600"
        },
        "success": {
          "10": "#E7FFE8",
          "20": "#BDFFC0",
          "30": "#92FF98",
          "40": "#68FF6F",
          "50": "#3DFF47",
          "60": "#13FE1F",
          "70": "#00D50B",
          "80": "#00AC09",
          "90": "#008407",
          "100": "#005B05"
        },
        "info": {
          "10": "#E7F0FF",
          "20": "#BDD6FF",
          "30": "#92BCFF",
          "40": "#68A2FF",
          "50": "#3D88FF",
          "60": "#136DFE",
          "70": "#0052D5",
          "80": "#0042AC",
          "90": "#003384",
          "100": "#00235B"
        },
        "danger": {
          "10": "#FFE7E8",
          "20": "#FFBDBE",
          "30": "#FF9294",
          "40": "#FF686A",
          "50": "#FF3D41",
          "60": "#FE1317",
          "70": "#D50004",
          "80": "#AC0003",
          "90": "#840002",
          "100": "#5B0002"
        }
      },
    },
  },
  plugins: [],
}

