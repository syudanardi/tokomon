export default function appReducer(state, action) {
    let input = [];
    let index = -1;
    function resetVar(){
      input=[];
      index=-1;
    }
    switch (action.type) {
      case "ADD_POKEMON":
        resetVar();
        if (state.pokemons[action.payload.pokemon]) {
          input = [...state.pokemons[action.payload.pokemon].names]
        }
        input.push(action.payload.name)
        return {
          ...state,
          pokemons: {
            ...state.pokemons,
            [action.payload.pokemon]: {names: input, image: action.payload.image}
          },
        };
        
      case "EDIT_POKEMON":
        resetVar();
        if (state.pokemons[action.payload.pokemon]) {
          input = [...state.pokemons[action.payload.pokemon].names]
        }
        index = input.indexOf(action.payload.name)
        input.splice(index, 1, action.payload.newName)
        return {
          ...state,
          pokemons: {
            ...state.pokemons,
            [action.payload.pokemon]: {...state.pokemons[action.payload.pokemon], names: input}
          },
        };
  
      case "REMOVE_POKEMON":
        resetVar();
        if (state.pokemons[action.payload.pokemon]) {
          input = [...state.pokemons[action.payload.pokemon].names]
        }
        index = input.indexOf(action.payload.name);
        if (index > -1) {
          input.splice(index, 1);
        } else {
          console.log("error removing, index not found");
          return {...state}
        }
        
        return {
          ...state,
          pokemons: {
            ...state.pokemons,
            [action.payload.pokemon]: {
              ...[action.payload.pokemon],
              names: input
            }
          },
        };

      case "RESET":
        resetVar();
        return {
					...action.payload
				};
      
      case "LOAD_POKEMON":
        return {
          ...state,
          loaded: [...state.loaded, ...action.payload],
        }

      default:
        return state;
    }
  };