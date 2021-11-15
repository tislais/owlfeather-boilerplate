import React from 'react';

const image = `https://media.istockphoto.com/vectors/set-of-rustic-realistic-feathers-of-different-birds-owls-peacocks-vector-id1022255880`

const Main = () => {
  return (
    <main>
      <section>
        <h2>Project <span>Owlfeather</span></h2>

        <figure>
          <img src={image} alt="feathers" />
          <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non quam et erat suscipit commodo ut congue mi. Duis dictum ac mi vel condimentum. </figcaption>
        </figure>
        
        <p>Consequuntur, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt repudiandae qui assumenda ducimus deleniti illo maiores cum, rem nihil sit accusantium consequatur unde, ratione laboriosam voluptas quidem! Aenean maximus diam a suscipit sagittis. </p>
        <p>Proin velit est, tempus eget ligula ut, feugiat gravida arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nisi magna, tincidunt in ullamcorper efficitur, hendrerit ut neque. Duis sit amet dapibus nulla, sed venenatis ligula. Nunc id sollicitudin nisl. Vivamus id tincidunt risus, sit amet faucibus est. Vestibulum ultricies sapien sit amet metus congue semper. Praesent imperdiet ornare nulla, et mollis nisi aliquam et. </p>
      </section>
    </main>
  )
}

export default Main;
