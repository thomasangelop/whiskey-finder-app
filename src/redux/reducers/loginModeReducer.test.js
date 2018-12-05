import loginModeReducer from './loginModeReducer';

describe('Test loginModeReducer', () => {
  test('initial state should be empty', () => {
    let action = {};
    let returnedState = loginModeReducer( undefined, action );
    expect( returnedState ).toEqual( 'login');
  });

  test('check that login action sets state to login', () => {
    let action = {type: 'SET_TO_LOGIN_MODE'};
    let returnedState = loginModeReducer( undefined, action );
    expect( returnedState ).toEqual( 'login' );
  });

  test('check that register action sets state to login', () => {
    let action = {type: 'SET_TO_REGISTER_MODE'};
    let returnedState = loginModeReducer( undefined, action );
    expect( returnedState ).toEqual( 'register' );
  });

  test('test that unexpected action types route to login', () => {
    let action = {type: 'FOO_BAR'};
    let returnedState = loginModeReducer( undefined, action );
    expect( returnedState ).toEqual( 'login');
  });

});