export const exportCSV = (users) => {
    if (!users || users.length === 0) {
        alert("No data available to export.");
        return;
    }

    const csvData = users.map((user) => ({
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        College: user.college,
        Year: user.yearOfStudy,
        Branch: user.branch,
        ReferralCode: user.referralCode,
        ReferralCount: user.referralCount,
        RewardStatus: user.rewardStatus,
        CreatedAt: new Date(user.createdAt).toLocaleString(),
    }));

    const headers = Object.keys(csvData[0]).join(",");

    const rows = csvData.map((row) =>
        Object.values(row)
            .map((value) => `"${value ?? ""}"`)
            .join(",")
    );

    const csv = [headers, ...rows].join("\n");

    const blob = new Blob([csv], {
        type: "text/csv;charset=utf-8;",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
        "download",
        `students-${new Date().toISOString().slice(0, 10)}.csv`
    );

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
};