export async function EmailDuplicateCheck(email) {
    if (email === undefined) {
        return true;
    }
    const obj = {
        email: email,
    };
    console.log(obj);
    const res = await fetch("/api/test", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    }).then((response) => response.json());
    if (res.is_exist) {
        return false;
    } else {
        return true;
    }
}
