import React from 'react'

const Home = () => {
    return (
        <div class="container mt-4 d-flex justify-content-center">
            <div class="row g-0">
                <div class="col-md-4 border-right">
                    <div class="cards">
                        <div class="first bg-white p-4 text-center">
                            <img className='intro-img' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-machine-learning-robotics-flaticons-lineal-color-flat-icons.png" alt='img' />

                            <h5>Machine Learning</h5>
                            <p class="line">Projects related to Machine Learning Algorithms, Deep Learning and NLP</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border-right">
                    <div class="cards">
                        <div class=" second bg-white p-4 text-center"> <img className='intro-img' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-web-development-internet-marketing-flaticons-lineal-color-flat-icons-3.png" alt='img' />
                            <h5>Web Development</h5>
                            <p class="line">Projects related to HTML, CSS, BootStrap, React JS, MongoDB, Python Flask</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="cards">
                        <div class=" third bg-white p-4 text-center"> <img className='intro-img' src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/344/external-ai-security-cyber-attack-hacking-smashingstocks-hand-drawn-black-smashing-stocks-2.png" alt='img' />
                            <h5>AI Application</h5>
                            <p class="line">Projects related to combination of Web application & Machine Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home