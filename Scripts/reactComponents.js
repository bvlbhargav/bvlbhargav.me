
// Hello World component

var helloWorld = React.createClass(
    {
        render:function(){
            return (<div>Hello Lashmi Bhargava</div>);
        }
    }
)


// Primary placehoolder for the scripts for bvlbhargav.me project

//Rendering HellowWorld component on page

ReactDOM.Render(<helloWorld/>,document.getElementById('content'));