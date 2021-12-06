import { useState } from "react";
import logo from './logo.svg';
import './App.css';

export default function Form() {
    //https://elsammit-beginnerblg.hatenablog.com/entry/2021/02/11/221720

    const [links,setLinks] = useState("");
    const [htmls,setHtmls] = useState("");

    // ['https://google.co.jp','https://yahoo.jp']
    // const requestOptions ={
    //     method: 'POST',
    //     headers:{'Content-Type': 'application/json'},
    //     body: JSON.stringify({Name: "hogehoge"})
    // };

    // const submitData = () => {
    //     fetch("/",requestOptions
    //     ).then((response) =>response.json()
    //     ).then((result) =>{
    //         console.log(result)

    //     }) 
    // }

    /*スタイル*/
    const textareaWidth ={
        width:"80%",
        minHeight:"80px",
        borderRadius:"5px",
        marginBottom:"20px"
    
      }

    const onChangeLinks = (e) =>{
        setLinks(e.target.value)
    }
    const onChangeHtmlss = (e) =>{
        setHtmls(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault();
        console.log("はっか")
        console.log(links);
        console.log(htmls);
    }

  return (
    <div className="Form_wrap">
        <form action="/" method="post" onSubmit={submitForm}> 
            リンク配列<br />
            <textarea id="links" name="links" style={textareaWidth} value={links} onChange={onChangeLinks} ></textarea><br />
            htmlタグを設定します<br />
            <textarea id="htmlTags" name="htmlTags" style={textareaWidth} value={htmls} onChange={onChangeHtmlss}></textarea><br />
            <input type="submit" value="送信"/>
        </form>

        <p>リンク</p>
        {links}
        <p>htmlタグ</p>
        {htmls}
     
    </div>
    
  );
}

