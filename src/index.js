import  express  from "express";
import morgan from "morgan"
const app = express();



app.use(express.json())
app.use(morgan('dev'))

/* app.all('/user', (req, res, next)=>{
    console.log('Por aqui paso ')
    next(); 
}) */

app.get('/user', (req, res)=>{
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    })
})

app.post('/user/:id',(req, res)=>{
    console.log(req.body)
    console.log(req.params)
    res.send('Post request received')
})

app.put('/user/:id',(req, res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} update`)
})

app.delete('/user/:userid',(req, res)=>{
    res.send(`User ${req.params.userid} deleted`)
})

app.use(express.static('public'))

app.listen(5000)
console.log('server on port 5000')