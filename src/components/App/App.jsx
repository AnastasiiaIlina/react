import React from 'react';
import Header from 'components/Header';
import Post from 'components/Post';
import Logo from 'components/Logo';
import posts from 'fakeDataBase';

class App extends React.Component {
    render() {
        
       
        return (
            <div>  
                <Header text = 'Social book'>
                    <Logo />
                </Header>
                {/* <Post
                    name={post[0].name} 
                    date={post[0].date} 
                    text={post[0].text}
                />

                <Post {...post[1]}/>

                <Post 
                    name={post[2].name} 
                    date={post[2].date} 
                    text={post[2].text}
                /> */}

                { posts.map(post => <Post key={post.id} name={post.name} date={post.date} text={post.text}liked={post.liked} />) }


                { posts.map(post => <Post key={post.id} {...post} />) }
            </div>
        );
    }
}

export default App;