export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_POKEMON":
        let input = [];
        if (state.pokemons[action.payload.pokemon]) {
          input = [...state.pokemons[action.payload.pokemon]]
        }
        input.push(action.payload.name)
        return {
          ...state,
          pokemons: {
            ...state.pokemons,
            [action.payload.pokemon]: input
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
  
      case "REMOVE_EMPLOYEE":
        return {
          ...state,
          employees: state.employees.filter(
            (employee) => employee.id !== action.payload
          ),
        };

      case "RESET":
        return {
					...action.payload
				};

      default:
        return state;
    }
  };