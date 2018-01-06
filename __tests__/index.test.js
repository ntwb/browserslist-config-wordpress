const browserslist = require( 'browserslist' );
const config = require( '../' );

beforeEach(() => {
	jest.resetModules();
});

it( 'should export an array', () => {
	expect( Array.isArray( config ) ).toBe( true );
});

it( 'should not contain invalid queries', () => {
	jest.doMock( 'browserslist-config-wordpress', () => require( '../index' ), { virtual: true });

	const result = browserslist(['extends browserslist-config-wordpress']);
	expect( result ).toBeTruthy();
});
