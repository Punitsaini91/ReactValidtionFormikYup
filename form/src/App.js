import logo from './logo.svg';
import './App.css';
import { Form} from './Components/Form';
import { Typography } from '@mui/material';




function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" sx={{textAlign:'center'}}color='#FFF5EE' backgroundColor="#20B2AA" mb={2}>
 Validation Form
</Typography>
    <Form/>
    </div>
  );
}

export default App;
