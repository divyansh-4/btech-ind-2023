import React from 'react';
import SEO from '../components/common/SEO';
import ExampleComponent from '../components/example/ExampleComponent';

function Example() {
  return (
    <>
      <SEO title={'Example'} />
      <div className='flex justify-center text-3xl'>
        This is an example page to demonstrate routing.
      </div>
      <ExampleComponent />
    </>
  );
}

export default Example;
