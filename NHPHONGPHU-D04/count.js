let input = prompt("Vui lòng nhập số: ");

count(input)

function count(input)
{
    let unit = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let dozens = ["mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    let unitNorth = ["tư", "lăm"];
    let countString = 1;
    let read = "";
    let temp = 0;
    let integer = 0;
    let surplus = 0;

    for(let i = input.length; i >= 0; i--)
    {
        let string = parseInt(input.charAt(input.length-countString));

        if(input<10)
        {
            read = unit[input];
        }
        else if(input >= 10 && input < 20)
        {
            integer = parseInt(input / 10 - 1);
            surplus  = input % 10;
            if(surplus == 5)
            {
                read = dozens[integer] + " " +unitNorth[surplus-4];
            }
            else
            {
                read = dozens[integer] + " " +unit[surplus];
            }
        }

        else if (input>=20 && input<100)
        {
            integer = parseInt(input / 10 - 1);
            surplus  = input % 10;
            if(surplus == 0)
            {
                read = dozens[integer]
            } else
            {
                read = dozens[integer] + " " +unit[surplus];
            }
        }
        countString++;

    }
    alert(read);
}