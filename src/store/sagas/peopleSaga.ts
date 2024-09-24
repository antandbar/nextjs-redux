import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchPersonSuccess, fetchPersonFailure } from '../slices/peopleSagaSlice';

// Define el tipo de retorno de la saga
type FetchPersonResponse = { nombre: string; apellido: string };

// Define un tipo para el error
interface FetchError {
    message: string;
  }
  

// Función que realiza la llamada a la API
async function fetchPersonFromAPI(): Promise<FetchPersonResponse> {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];
  return { nombre: user.name.first, apellido: user.name.last };
}

// Saga para manejar la obtención de la persona
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* fetchPersonSaga(): Generator<any, void, FetchPersonResponse> {
    try {
      const person: FetchPersonResponse = yield call(fetchPersonFromAPI);
      yield put(fetchPersonSuccess(person)); // Despacha la acción de éxito
    } catch (error) {
      // Asegúrate de que el error tenga la forma que defines
      const fetchError: FetchError = (error as Error) || { message: 'Error desconocido' };
      yield put(fetchPersonFailure(fetchError.message)); // Despacha la acción de fallo
    }
  }

// Observador que escucha la acción FETCH_PERSON_REQUEST
export function* watchFetchPerson() {
  yield takeLatest('people/fetchPersonRequest', fetchPersonSaga);
}
