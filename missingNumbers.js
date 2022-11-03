function missingNumbers(arr)
{
    let array1 = [11,12,13,14,15,16,17,18,19,20];
    let missArray = [];
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    for (let i=minNum; i <= maxNum; i++)
    {
        if (arr.indexOf(i)<0)
        {
            missArray.push(i);
        }

    }
    return missArray;
}

console.log(missingNumbers([11,15,17,18,19]));

