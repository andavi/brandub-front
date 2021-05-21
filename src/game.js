

const setupData = {
  occupied : [3,10,17,21,22,23,24,25,26,27,31,38,45],
  pieces: 'aadaadkdaadaa'.split(''),
}
  
const Brandub = {
  name: "brandub",

  setup: (ctx, setpData) => ({
    cells: Array(49).fill().map((c, idx) => ({
      coords: [Math.floor(idx/7), idx % 7],
      piece: setupData.occupied.includes(idx) ? setupData.pieces.pop() : '',
      corner: [0, 6, 42, 48].includes(idx),
      throne: idx === 24,
    }))
  }),

  

}
  
export default Brandub;
  