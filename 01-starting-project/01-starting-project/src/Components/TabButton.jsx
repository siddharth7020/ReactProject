export default function TabButton ({children,isSelected,...props}) {
    // console.log('tab content');
    return(
        <li><button className={isSelected ? 'active' :undefined} {...props}>{children}</button></li>
    );
    
}