# Instalación y ejecución del proyecto
## Programas necesarios
1. Editor de codigo (VisualStudioCode)
2. Node.js
## Instalación
* Crear una carpeta vacia.
* Acceder dentro mediante terminal
  ### Git Clone
  > git clone https://github.com/guillemsusial/PaginaGuttmannEstructura.git
  ### Git Status
  > git status
  Resultado esperado:
    
    ![](/readme_assets/gitStatus.jpg)

  ### Instalar depencias del proyecto
  > npm install
  
## Posibles Errores
  1.Scripts 
   * Para resolver este error entraremos en PowerShell como Admin
      > Set-ExecutionPolicy Unrestricted
      
       ![](https://tecnotraffic.net/wp-content/uploads/2020/11/1605567827_547_3-formas-de-cambiar-la-politica-de-ejecucion-de-PowerShell.png)
       
  2.OutWorkSpace 
   * Para resolver este error deberemos entrar en la carpeta del proyecto

       ![](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2021/07/2-Multi-root-workspace-untitled-ESP32-ESP8266-VS-Code.png?resize=750%2C288&quality=100&strip=all&ssl=1)

  3.Termino "ng" no se reconoce...  
     ![](/readme_assets/41065b1d-3939-4f5d-b986-ff6c600f49ea.jpg)
     
   * Para resolver este error deberemos en las variables de entorno de Windowns     
   * Entrar en variables locales -> Entramos en PATH -> Y añadir:
   
     >C:\Users\%usuario%\AppData\Roaming\npm
