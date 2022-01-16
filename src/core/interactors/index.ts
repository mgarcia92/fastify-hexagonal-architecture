import { PersonDataSource } from '../dataSources/person.datasource'
import { PersonInteractor } from './person.interactor'



export const personInteractor = new PersonInteractor(new PersonDataSource())


