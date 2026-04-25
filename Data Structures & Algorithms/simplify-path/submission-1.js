class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let pathArr = path.split("/");
        let stack = [];
        for(let p of pathArr){
            if(p == ".." && stack.length) stack.pop();
            else if(p!= "" && p!== ".." && p!=="."){
                stack.push(p);
            }
        }
         return "/" + stack.join("/");
    }
   
}
