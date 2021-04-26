export default function appReducer(state, action) {
    let input = [];
    switch (action.type) {
      case "ADD_POKEMON":
        input = [];
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
        
      case "EDIT_EMPLOYEE":
        const updatedEmployee = action.payload;
  
        const updatedEmployees = state.employees.map((employee) => {
          if (employee.id === updatedEmployee.id) {
            return updatedEmployee;
          }
          return employee;
        });
  
        return {
          ...state,
          employees: updatedEmployees,
        };
  
      case "REMOVE_POKEMON":
        input=[];
        if (state.pokemons[action.payload.pokemon]) {
          input = [...state.pokemons[action.payload.pokemon].names]
        }
        const index = input.indexOf(action.payload.name);
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
        return {
					...action.payload
				};

      default:
        return state;
    }
  };