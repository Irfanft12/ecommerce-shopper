
import { useState } from "react"
import "./descriptionBox.css"

export default function DescriptionBox() {
    const [activeTab, setActiveTab] = useState("description")

    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <button
                    type="button"
                    className={`description-box-nav-box ${
                        activeTab === "description" ? "active" : "fade"
                    }`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>

                <button
                    type="button"
                    className={`description-box-nav-box ${
                        activeTab === "reviews" ? "active" : "fade"
                    }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews (122)
                </button>
            </div>

            <div className="description-box-description">
                {activeTab === "description" ? (
                    <>
                        <p>
                            Online sales continue to grow. By 2026, almost a quarter
                            of all retail sales are likely to happen online—so if
                            you have a small business, you should probably have a
                            web store. The good news is that with the right tools,
                            it&apos;s easy for any small business to quickly start
                            selling online.
                        </p>
                        <p>
                            Robust analytics are important as you grow, so be sure
                            the platform you choose is reporting on your metrics
                            in a way you feel confident analyzing and acting on.
                        </p>
                    </>
                ) : (
                    <div className="description-box-no-reviews">
                        <h3>Customer Reviews</h3>
                        <p>Review details are not available yet.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
